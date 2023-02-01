import { SearchInterface } from './../../models/restaurantInterface';
import { Component, OnInit } from '@angular/core';
import { NavigatorInterface } from 'src/app/models/restaurantInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public navigatorInfo: NavigatorInterface[];
  public searchInfo: SearchInterface[];

  constructor() {
    (this.navigatorInfo = [
      {
        content: 'Orders',
        link: '#orders',
      },
      {
        content: 'Delivery',
        link: '#delivery',
      },
    ]),
      (this.searchInfo = [
        {
          content: 'Entrantes',
          link: '#entrantes'
        },
        {
          content: 'Tallarines',
          link: '#tallarines',
        },
        {
          content: 'Arroces',
          link: '#arroces',
        }, {
          content: 'Carnes',
          link: '#carnes'
        },
      ]);
  }

  ngOnInit(): void {}
}
