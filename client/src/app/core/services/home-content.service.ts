import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export interface ValueProp {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface HomeContent {
  valueProps: ValueProp[];
  testimonials: Testimonial[];
  brands: Brand[];
}

const FALLBACK_CONTENT: HomeContent = {
  valueProps: [
    {
      id: 'delivery',
      icon: 'local_shipping',
      title: 'Fast Delivery',
      description: 'Express dispatch with reliable doorstep delivery across major cities.'
    },
    {
      id: 'quality',
      icon: 'verified',
      title: 'Premium Quality',
      description: 'Every product is curated and quality-checked for long-term performance.'
    },
    {
      id: 'payment',
      icon: 'shield_lock',
      title: 'Secure Payment',
      description: 'Encrypted checkout and trusted payment partners for a safe transaction flow.'
    },
    {
      id: 'support',
      icon: 'support_agent',
      title: '24/7 Support',
      description: 'Dedicated support team available day and night for any order assistance.'
    }
  ],
  testimonials: [
    {
      id: 't1',
      name: 'Aarav Shah',
      avatar: 'https://i.pravatar.cc/120?img=12',
      rating: 5,
      review: 'Exceptional build quality and ultra-fast delivery. My workspace feels premium now.'
    },
    {
      id: 't2',
      name: 'Neha Verma',
      avatar: 'https://i.pravatar.cc/120?img=32',
      rating: 5,
      review: 'The product quality is exactly as described. Checkout was smooth and secure.'
    },
    {
      id: 't3',
      name: 'Rohit Mehta',
      avatar: 'https://i.pravatar.cc/120?img=45',
      rating: 4,
      review: 'Great selection and fast support response. I found the perfect keyboard setup.'
    }
  ],
  brands: [
    { id: 'b1', name: 'Logitech' },
    { id: 'b2', name: 'Razer' },
    { id: 'b3', name: 'SteelSeries' },
    { id: 'b4', name: 'HyperX' },
    { id: 'b5', name: 'Corsair' },
    { id: 'b6', name: 'ASUS' }
  ]
};

@Injectable({ providedIn: 'root' })
export class HomeContentService {
  private readonly apiUrl = 'http://localhost:5000/api/home/content';

  constructor(private http: HttpClient) {}

  fetchContent(): Observable<HomeContent> {
    return this.http.get<HomeContent>(this.apiUrl).pipe(
      catchError(() => of(FALLBACK_CONTENT))
    );
  }
}
