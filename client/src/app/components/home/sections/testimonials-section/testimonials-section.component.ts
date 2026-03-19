import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../../core/services/home-content.service';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent {
  @Input() testimonials: Testimonial[] = [];

  stars(rating: number): number[] {
    return Array.from({ length: Math.max(0, Math.min(5, rating)) }, (_, i) => i);
  }
}
