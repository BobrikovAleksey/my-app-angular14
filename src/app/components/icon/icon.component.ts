import { Component, Input } from '@angular/core';

import { Icon } from './Icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  Icon = Icon

  @Input() name: Icon = Icon.None
}
