import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Icon } from '../icon/Icon';

interface IRoute {
  link: string;
  name: string;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  iconList = Icon

  menuOpen = false

  routes = {
    current: <string> '',
    list: <IRoute[]> [
      { link: '/', name: 'catalog' },
      { link: '/about', name: 'about' },
    ],
  }

  constructor(private location: Location, private router: Router) {
    router.events.subscribe(() => {
      if(location.path() !== '') {
        this.routes.current = location.path();
      } else {
        this.routes.current = this.route(0).link;
      }
    });
  }

  get currentRoute(): string {
    return this.routes.current;
  }

  get routeList(): IRoute[] {
    return this.routes.list;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  openMenu(): void {
    this.menuOpen = true;
  }

  switchMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  route(i: number): IRoute {
    return (i && i >= 0 && i < this.routes.list.length) ? this.routeList[i] : this.routeList[0];
  }

}
