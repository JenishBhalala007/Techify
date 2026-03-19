import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  cartCount = 0;
  searchOpen = false;
  mobileOpen = false;
  profileMenuOpen = false;
  isLoggedIn = false;
  userName = '';
  userEmail = '';
  isAdmin = false;
  private authSubscription!: Subscription;

  constructor(
    private cartService: CartService, 
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.cartCount = this.cartService.count;
    });

    // Subscribing to auth status behavior subject
    this.authSubscription = this.authService.authStatus$.subscribe((status) => {
      this.isLoggedIn = status;
      if (this.isLoggedIn) {
        const user = this.authService.getCurrentUser();
        this.userName = user?.name || 'User';
        this.userEmail = user?.email || '';
        this.isAdmin = user?.role === 'admin';
      } else {
        this.isAdmin = false;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  updateAuthStatus(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      const user = this.authService.getCurrentUser();
      this.userName = user?.name || 'User';
      this.userEmail = user?.email || '';
      this.isAdmin = user?.role === 'admin';
    } else {
      this.isAdmin = false;
    }
  }

  toggleSearch(): void {
    this.searchOpen = !this.searchOpen;
  }

  onSearch(query: string): void {
    if (query.trim()) {
      this.router.navigate(['/products'], { queryParams: { search: query.trim() } });
    } else {
      this.router.navigate(['/products']);
    }
  }

  onProfileClick(): void {
    this.toggleProfileMenu();
  }

  toggleProfileMenu(): void {
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  navigateToDashboard(): void {
    this.profileMenuOpen = false;
    this.router.navigate(['/dashboard']);
  }

  navigateToAdmin(): void {
    this.profileMenuOpen = false;
    this.router.navigate(['/admin']);
  }

  logout(): void {
    this.authService.logout();
    this.profileMenuOpen = false;
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.profile-menu');
    
    if (!clickedInside && this.profileMenuOpen) {
      this.profileMenuOpen = false;
    }
  }
}
