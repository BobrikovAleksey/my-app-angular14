import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent {
  @Input() title: string
  @Input() description: string
  @Input() template: TemplateRef<void>
}
