import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitting = false;
  isLoggedIn = false;
  currentUser: any = null;
  toast: { show: boolean; type: 'success' | 'error'; message: string } = {
    show: false,
    type: 'success',
    message: ''
  };

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsappNumber: [''],
      subject: ['General Inquiry', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.currentUser = this.authService.getCurrentUser();
      this.contactForm.patchValue({
        name: this.currentUser?.name || '',
        email: this.currentUser?.email || ''
      });
      // Disable email field so user cannot change it
      this.contactForm.get('email')?.disable();
    }
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const formData = this.contactForm.getRawValue();
    this.http.post('http://localhost:5000/api/contact', formData).subscribe({
      next: () => {
        this.submitting = false;
        this.contactForm.reset({ subject: 'General Inquiry' });
        this.showToast('success', 'Your message has been sent successfully! We\'ll get back to you soon.');
      },
      error: (err) => {
        this.submitting = false;
        const msg = err?.error?.message || 'Something went wrong. Please try again.';
        this.showToast('error', msg);
      }
    });
  }

  private showToast(type: 'success' | 'error', message: string): void {
    this.toast = { show: true, type, message };
    setTimeout(() => { this.toast = { ...this.toast, show: false }; }, 4000);
  }

  isInvalid(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}
