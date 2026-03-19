import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  savedAddresses?: Array<{
    _id?: string;
    name: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
    isDefault?: boolean;
  }>;
  wishlist?: any[];
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/users';
  private userProfileSubject = new BehaviorSubject<UserProfile | null>(null);
  public userProfile$ = this.userProfileSubject.asObservable();

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/profile`).pipe(
      tap(profile => this.userProfileSubject.next(profile))
    );
  }

  updateUserProfile(profile: Partial<UserProfile>): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.apiUrl}/profile`, profile).pipe(
      tap(updatedProfile => this.userProfileSubject.next(updatedProfile))
    );
  }

  addAddress(address: any): Observable<UserProfile> {
    return this.getUserProfile().pipe(
      tap(profile => {
        if (!profile.savedAddresses) {
          profile.savedAddresses = [];
        }
        profile.savedAddresses.push(address);
        this.userProfileSubject.next(profile);
      })
    );
  }

  updateAddress(addressId: string, address: any): Observable<UserProfile> {
    return this.getUserProfile().pipe(
      tap(profile => {
        if (profile.savedAddresses) {
          const index = profile.savedAddresses.findIndex(a => a._id === addressId);
          if (index !== -1) {
            profile.savedAddresses[index] = { ...profile.savedAddresses[index], ...address };
            this.userProfileSubject.next(profile);
          }
        }
      })
    );
  }

  deleteAddress(addressId: string): Observable<UserProfile> {
    return this.getUserProfile().pipe(
      tap(profile => {
        if (profile.savedAddresses) {
          profile.savedAddresses = profile.savedAddresses.filter(a => a._id !== addressId);
          this.userProfileSubject.next(profile);
        }
      })
    );
  }

  toggleWishlist(productId: string): Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/wishlist`, { productId }).pipe(
      tap(wishlist => {
        const profile = this.userProfileSubject.value;
        if (profile) {
          this.userProfileSubject.next({ ...profile, wishlist });
        } else {
          // Fallback if profile is not loaded yet
          this.userProfileSubject.next({ wishlist } as any);
          // And fetch the full profile in the background
          this.getUserProfile().subscribe();
        }
      })
    );
  }

  getCurrentProfile(): UserProfile | null {
    return this.userProfileSubject.value;
  }

  clearProfile(): void {
    this.userProfileSubject.next(null);
  }
}
