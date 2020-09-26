import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WfProcessComponent } from './wf-process/wf-process.component';
import {RouterModule} from '@angular/router';

const routes = [
  {
    path: 'wf-process', component: WfProcessComponent
  }
];

@NgModule({
  declarations: [WfProcessComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ElementsModule { }
