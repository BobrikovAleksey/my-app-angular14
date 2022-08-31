import { Component } from '@angular/core';

import { ICard } from '../../components/card/Card';
import { ICardLink } from '../../components/card-link/CardLink';
import { Icon } from '../../components/icon/Icon';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {

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

  steps = {
    value: 1,
    list: <ICard[]> [
      {
        name: 'component',
        title: 'New Component',
        value: 1,
      },
      {
        name: 'material',
        title: 'Angular Material',
        value: 2,
      },
      {
        name: 'pwa',
        title: 'Add PWA Support',
        value: 3,
      },
      {
        name: 'dependency',
        title: 'Add Dependency',
        value: 4,
      },
      {
        name: 'test',
        title: 'Run and Watch Tests',
        value: 5,
      },
      {
        name: 'build',
        title: 'Build for Production',
        value: 6,
      },
    ],
  }

  currentStep(): ICard {
    return this.steps.list.find((el) => el.value === this.steps.value) ?? this.steps.list[0];
  }

  changeStep(newValue: number): void {
    this.steps.value = newValue;
  }

}
