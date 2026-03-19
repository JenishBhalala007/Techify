import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AdminProduct {
  _id: string;
  title: string;
  price: number;
  discountPercentage?: number;
  category: string;
  brand: string;
  images: string[];
  stockQuantity: number;
  maxStockQuantity?: number;
  description: string;
  createdAt?: string;
}

export interface AdminOrderItem {
  productId: string;
  title: string;
  quantity: number;
  priceAtPurchase: number;
}

export interface AdminOrder {
  _id: string;
  userId: { _id: string; name: string; email: string } | string;
  orderItems: AdminOrderItem[];
  totalPrice: number;
  orderStatus: string;
  createdAt: string;
  shippingAddress: { street: string; city: string; state: string; zipCode: string; country: string };
  paymentMethod: string;
}

export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
  createdAt?: string;
}

export interface AdminMessage {
  _id: string;
  name: string;
  email: string;
  whatsappNumber?: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  private base = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getMessages(): Observable<AdminMessage[]> {
    return this.http.get<AdminMessage[]>(`${this.base}/contact`);
  }

  getProducts(): Observable<AdminProduct[]> {
    return this.http.get<AdminProduct[]>(`${this.base}/products`);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${this.base}/products/${id}`);
  }

  getOrders(): Observable<AdminOrder[]> {
    return this.http.get<AdminOrder[]>(`${this.base}/orders`);
  }

  getUsers(): Observable<AdminUser[]> {
    return this.http.get<AdminUser[]>(`${this.base}/users`);
  }

  createProduct(data: Partial<AdminProduct>): Observable<AdminProduct> {
    return this.http.post<AdminProduct>(`${this.base}/products`, data);
  }

  updateProduct(id: string, data: Partial<AdminProduct>): Observable<AdminProduct> {
    return this.http.put<AdminProduct>(`${this.base}/products/${id}`, data);
  }

}
