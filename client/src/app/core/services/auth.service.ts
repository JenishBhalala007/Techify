import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

// Interface matching the backend User schema payload
export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
    phone?: string;
    address?: {
        street?: string;
        city?: string;
        state?: string;
        zipCode?: string;
        country?: string;
    };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/users';
  private authStatusSubject = new BehaviorSubject<boolean>(this.hasToken());
  public authStatus$ = this.authStatusSubject.asObservable();

  constructor(private http: HttpClient) { }

  private hasToken(): boolean {
    return !!localStorage.getItem('id_token');
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => this.setSession(response))
    );
  }

  register(payload: RegisterPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, payload).pipe(
      tap((response: any) => this.setSession(response))
    );
  }

  private setSession(authResult: any) {
    if (authResult && authResult.token) {
        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem('user', JSON.stringify(authResult));
        this.authStatusSubject.next(true);
    }
  }

  updateSession(userData: any) {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
        const updatedUser = { ...currentUser, ...userData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
    this.authStatusSubject.next(false);
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  getCurrentUser(): any {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  getToken(): string | null {
    return localStorage.getItem('id_token');
  }
}
