import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';

const routes = [
];

@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
