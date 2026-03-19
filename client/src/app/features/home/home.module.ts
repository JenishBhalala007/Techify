import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { WhyChooseUsSectionComponent } from '../../components/home/sections/why-choose-us-section/why-choose-us-section.component';
import { TrendingProductsCarouselSectionComponent } from '../../components/home/sections/trending-products-carousel-section/trending-products-carousel-section.component';
import { TestimonialsSectionComponent } from '../../components/home/sections/testimonials-section/testimonials-section.component';
import { BrandsMarqueeSectionComponent } from '../../components/home/sections/brands-marquee-section/brands-marquee-section.component';
import { FooterEnhancementSectionComponent } from '../../components/home/sections/footer-enhancement-section/footer-enhancement-section.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    WhyChooseUsSectionComponent,
    TrendingProductsCarouselSectionComponent,
    TestimonialsSectionComponent,
    BrandsMarqueeSectionComponent,
    FooterEnhancementSectionComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}

