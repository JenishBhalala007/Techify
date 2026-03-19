import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../core/services/product.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  Brand,
  HomeContentService,
  Testimonial,
  ValueProp
} from '../../core/services/home-content.service';

interface Category { name: string; icon: SafeHtml; count: number; }
interface Feature { icon: SafeHtml; title: string; desc: string; }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  trendingProducts: Product[] = [];
  valueProps: ValueProp[] = [];
  testimonials: Testimonial[] = [];
  brands: Brand[] = [];
  categories: Category[] = [];
  features: Feature[] = [];

  constructor(
    private productService: ProductService,
    private sanitizer: DomSanitizer,
    private homeContentService: HomeContentService
  ) {
    const getSvg = (svgStr: string) => this.sanitizer.bypassSecurityTrustHtml(svgStr);

    this.categories = [
      { name: 'Keyboards', icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><rect width="20" height="16" x="2" y="4" rx="2" ry="2"></rect><path d="M6 8h.01"></path><path d="M10 8h.01"></path><path d="M14 8h.01"></path><path d="M18 8h.01"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path><path d="M7 16h10"></path></svg>`), count: 42 },
      { name: 'Mice', icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><rect x="5" y="2" width="14" height="20" rx="7"></rect><path d="M12 2v6"></path></svg>`), count: 28 },
      { name: 'Audio', icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>`), count: 19 },
      { name: 'Monitors', icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><rect width="20" height="14" x="2" y="3" rx="2"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>`), count: 15 }
    ];

    this.features = [
      { icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`), title: 'Lightning Fast Shipping', desc: 'Free 2-day shipping on all orders over ₹75. Same-day dispatch for in-stock items.' },
      { icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>`), title: '2-Year Warranty', desc: 'Every product comes with a comprehensive 2-year manufacturer warranty.' },
      { icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path></svg>`), title: '30-Day Returns', desc: 'Not satisfied? Return anything within 30 days for a full, no-questions-asked refund.' },
      { icon: getSvg(`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><path d="M6 3h12l4 6-10 13L2 9Z"></path><path d="M11 3 8 9l4 13"></path><path d="M13 3l3 6-4 13"></path><path d="M2 9h20"></path></svg>`), title: 'Premium Quality', desc: 'We only sell products that pass our rigorous quality and durability testing standards.' }
    ];
  }

  ngOnInit(): void {
    this.productService.fetchAll().subscribe({
      next: (products) => {
        this.featuredProducts = products.slice(0, 8);
        this.trendingProducts = products.slice(0, 10);
      },
      error: (err) => {
        console.error('Failed to load featured products', err);
      }
    });

    this.homeContentService.fetchContent().subscribe({
      next: (content) => {
        this.valueProps = content.valueProps;
        this.testimonials = content.testimonials;
        this.brands = content.brands;
      },
      error: (err) => {
        console.error('Failed to load home content', err);
      }
    });
  }
}
