import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '../../../../core/services/product.service';

@Component({
  selector: 'app-trending-products-carousel-section',
  templateUrl: './trending-products-carousel-section.component.html',
  styleUrls: ['./trending-products-carousel-section.component.css']
})
export class TrendingProductsCarouselSectionComponent {
  @Input() products: Product[] = [];
  @Input() title: string = 'Trending Products';
  @Input() subtitle: string = 'Trending Now';
  @ViewChild('slider') sliderRef?: ElementRef<HTMLDivElement>;

  private touchStartX = 0;
  private touchCurrentX = 0;

  scroll(direction: 'left' | 'right'): void {
    const slider = this.sliderRef?.nativeElement;
    if (!slider) return;

    const delta = slider.clientWidth * 0.8;
    slider.scrollBy({
      left: direction === 'right' ? delta : -delta,
      behavior: 'smooth'
    });
  }

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0]?.clientX ?? 0;
    this.touchCurrentX = this.touchStartX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchCurrentX = event.changedTouches[0]?.clientX ?? this.touchCurrentX;
  }

  onTouchEnd(): void {
    const distance = this.touchCurrentX - this.touchStartX;
    if (Math.abs(distance) < 40) return;

    if (distance < 0) {
      this.scroll('right');
      return;
    }

    this.scroll('left');
  }

  trackByProductId(_: number, product: Product): string {
    return String(product.id);
  }
}
