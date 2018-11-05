import { Component } from '@angular/core';

@Component({
  templateUrl: './badge-list.component.html'
})
export class BadgeListComponent {
  badges: {
    name: string;
    selected: boolean;
  }[];

  constructor() {
    this.badges = [
      {
        name: 'Airbus',
        selected: false
      },
      {
        name: 'Verizon',
        selected: true
      },
      {
        name: 'Lufthansa',
        selected: false
      },
      {
        name: 'Forever',
        selected: false
      },
      {
        name: 'Bootstrap',
        selected: false
      },
      {
        name: 'Original',
        selected: false
      },
      {
        name: 'Crunch',
        selected: false
      },
      {
        name: 'Bubble',
        selected: false
      },
      {
        name: 'Architects',
        selected: false
      },
      {
        name: 'Dollars',
        selected: false
      },
      {
        name: 'Cereals',
        selected: false
      },
      {
        name: 'FirstRate',
        selected: false
      },
      {
        name: 'Authentic',
        selected: false
      }
    ]
  }

  select(badge) {
    this.badges = this.badges.map(b => 
      Object.assign({}, b, { selected: b.name == badge.name ? true : false })
    );
  }
}