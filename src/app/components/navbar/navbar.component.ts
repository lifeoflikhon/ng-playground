import { Component, OnInit } from '@angular/core';
import {navigations} from './models/navigation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public items: any[];

  constructor() { }

  ngOnInit(): void {
    this.items = navigations;
  }

}
