import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitting = false;
  toast: { show: boolean; type: 'success' | 'error'; message: string } = {
    show: false,
    type: 'success',
    message: ''
  };

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      whatsappNumber: [''],
      subject: ['General Inquiry', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.http.post('http://localhost:5000/api/contact', this.contactForm.value).subscribe({
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
