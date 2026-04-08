import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  id: any;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity?: number;
  description: string;
  features?: any;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiBase = 'http://localhost:5000/api';


  constructor(private http: HttpClient) {}

  private normalizeCategory(category: string): string {
    if (!category) return '';
    // Normalize category names to handle inconsistencies
    const normalized = category.trim();
    const lower = normalized.toLowerCase();
    
    // Map common variations to standard names
    if (lower === 'keyboard' || lower === 'keyboards') return 'Keyboards';
    if (lower === 'mouse' || lower === 'mice') return 'Mice';
    if (lower === 'audio' || lower === 'headset' || lower === 'headsets') return 'Audio';
    if (lower === 'monitor' || lower === 'monitors') return 'Monitors';
    
    // Return sentence case for other categories
    return normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase();
  }

  private normalizeBrand(brand: string): string {
    if (!brand) return '';
    const normalized = brand.trim();
    if (normalized.length === 0) return '';
    // Capitalize first letter of each word for brand names (e.g. "Cooler Master")
    return normalized.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  }

  private mapApiProduct(p: any): Product {
    const finalPrice = p.discountPercentage > 0
      ? +(p.price * (1 - p.discountPercentage / 100)).toFixed(2)
      : p.price;
    return {
      id: p._id,
      name: p.title,
      brand: this.normalizeBrand(p.brand),
      category: this.normalizeCategory(p.category),
      price: finalPrice,
      originalPrice: p.discountPercentage > 0 ? p.price : undefined,
      image: p.images?.[0] || '',
      tags: [],
      rating: 0,
      reviewCount: 0,
      inStock: p.stockQuantity > 0,
      description: p.description,
      features: p.features || {}
    };
  }

  fetchAll(): Observable<Product[]> {
    return this.http.get<any[]>(`${this.apiBase}/products`).pipe(
      map(products => products.map(p => this.mapApiProduct(p)))
    );
  }

  fetchById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiBase}/products/${id}`);
  }

  getCategories(): string[] { return ['Keyboards', 'Mice', 'Audio', 'Accessories']; }
}
