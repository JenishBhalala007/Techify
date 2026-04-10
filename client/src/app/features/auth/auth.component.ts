import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth.service';

@Component({
// ... template gets ignored in replace, so start from the top of the file

  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  activeTab = 'login';
  showPassword = false;
  showRegisterPassword = false;
  
  loginForm!: FormGroup;
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Initialize Login Form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Initialize Registration Form matching Backend User Schema
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d).+$/)]],
      phone: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zipCode: [''],
        country: ['']
      })
    });
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          this.toastr.success(`Welcome back, ${res.name}!`, 'Login Successful');
          this.router.navigate([res.role === 'admin' ? '/admin' : '/']);
        },
        error: (err) => {
          const message = err.error && err.error.message ? err.error.message : 'Invalid credentials';
          this.toastr.error(message, 'Login Failed');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      // Create valid payload by stripping out empty fields
      const payload = { ...this.registerForm.value };
      
      // Sanitize phone if empty
      if (!payload.phone) delete payload.phone;

      // Sanitize address if completely empty, otherwise just remove empty strings
      if (payload.address) {
        let hasAddressDetails = false;
        Object.keys(payload.address).forEach(key => {
          if (!payload.address[key]) {
             delete payload.address[key];
          } else {
             hasAddressDetails = true;
          }
        });
        
        if (!hasAddressDetails) {
            delete payload.address;
        }
      }
      
      this.authService.register(payload).subscribe({
        next: (res) => {
          this.toastr.success(`Account created for ${res.name}. Welcome to Techify!`, 'Registration Successful');
          this.router.navigate(['/']);
        },
        error: (err) => {
          const message = err.error && err.error.message ? err.error.message : 'Registration failed';
          this.toastr.error(message, 'Account Creation Error');
        }
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}


