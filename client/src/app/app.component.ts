import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './core/services/auth.service';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="font-display text-slate-900 dark:text-slate-100 antialiased">
      <app-toast></app-toast>
      <ng-container *ngIf="showLayout">
        <div class="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
          <app-navbar></app-navbar>
          <div class="flex flex-1 w-full relative">
            <div class="layout-content-container flex flex-col w-full flex-1">
              <main class="app-main flex flex-1 flex-col w-full">
                <router-outlet></router-outlet>
              </main>
            </div>
          </div>
          <app-footer></app-footer>
        </div>
      </ng-container>

      <ng-container *ngIf="!showLayout">
        <router-outlet></router-outlet>
      </ng-container>
    </div>
  `,
  styles: [`
    .app-main {
      min-height: calc(100vh - 72px);
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Techify';
  showLayout = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof   NavigationEnd)
    ).subscribe((event: any) => {
      // Hide layout on auth, user dashboard, and admin pages
      const url = event.urlAfterRedirects;
      this.showLayout = !url.includes('/auth') && !url.includes('/dashboard') && !url.includes('/admin');
    });

    // Make sure user profile is loaded for global state if logged in
    this.authService.authStatus$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.userService.getUserProfile().subscribe({
          error: (err) => console.error('Failed to load initial user profile:', err)
        });
      } else {
        this.userService.clearProfile();
      }
    });
  }
}
