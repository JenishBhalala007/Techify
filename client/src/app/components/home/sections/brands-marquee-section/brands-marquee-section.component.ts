import { Component, Input } from '@angular/core';
import { Brand } from '../../../../core/services/home-content.service';

@Component({
  selector: 'app-brands-marquee-section',
  templateUrl: './brands-marquee-section.component.html',
  styleUrls: ['./brands-marquee-section.component.css']
})
export class BrandsMarqueeSectionComponent {
  @Input() brands: Brand[] = [];

  get loopingBrands(): Brand[] {
    return [...this.brands, ...this.brands];
  }

  trackByBrand(_: number, brand: Brand): string {
    return `${brand.id}-${brand.name}`;
  }
}
