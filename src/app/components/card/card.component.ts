import { Component, Input } from '@angular/core';

import { ICard } from './Card';
import { Icon } from '../icon/Icon';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  Icon = Icon

  @Input() active: boolean = false
  @Input() item: ICard
  @Input() changeCard?: Function

  clickHandler(): void {
    this.changeCard && this.changeCard(this.item.value);
  }
}
