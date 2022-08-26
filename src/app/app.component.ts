import { Component } from '@angular/core';

import { ICard } from './components/card/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  step = 'component';

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
