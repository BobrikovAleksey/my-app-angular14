import { Component, Input } from '@angular/core';

import { ICardLink } from './CardLink';
import { Icon } from '../icon/Icon';

@Component({
  selector: 'app-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss']
})
export class CardLinkComponent {
  Icon = Icon

  @Input() item: ICardLink
}
