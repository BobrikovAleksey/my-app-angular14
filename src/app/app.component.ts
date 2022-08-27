import { Component } from '@angular/core';

import { ICard } from './components/card/Card';
import { ICardLink } from './components/card-link/CardLink';
import { Icon } from './components/icon/Icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step = 'component';

  resources: ICardLink[] = [
    {
      icon: Icon.School,
      href: 'https://angular.io/tutorial',
      title: 'Learn Angular',
    },
    {
      icon: Icon.Code,
      href: 'https://angular.io/cli',
      title: 'CLI Documentation',
    },
    {
      icon: Icon.AngularMaterial,
      href: 'https://material.angular.io',
      title: 'Angular Material',
    },
    {
      icon: Icon.Whatshot,
      href: 'https://blog.angular.io/',
      title: 'Angular Blog',
    },
    {
      icon: Icon.SavedSearch,
      href: 'https://angular.io/devtools/',
      title: 'Angular DevTools',
    },
  ]

  steps: ICard[] = [
    {
      title: 'New Component',
      value: 'component',
      onClick: () => { this.step = 'component' },
    },
    {
      title: 'Angular Material',
      value: 'material',
      onClick: () => { this.step = 'material' },
    },
    {
      title: 'Add PWA Support',
      value: 'pwa',
      onClick: () => { this.step = 'pwa' },
    },
    {
      title: 'Add Dependency',
      value: 'dependency',
      onClick: () => { this.step = 'dependency' },
    },
    {
      title: 'Run and Watch Tests',
      value: 'test',
      onClick: () => { this.step = 'test' },
    },
    {
      title: 'Build for Production',
      value: 'build',
      onClick: () => { this.step = 'build' },
    },
  ];
}
