import { Component, Input } from '@angular/core';
import { ValueProp } from '../../../../core/services/home-content.service';

@Component({
  selector: 'app-why-choose-us-section',
  templateUrl: './why-choose-us-section.component.html',
  styleUrls: ['./why-choose-us-section.component.css']
})
export class WhyChooseUsSectionComponent {
  @Input() valueProps: ValueProp[] = [];
}
