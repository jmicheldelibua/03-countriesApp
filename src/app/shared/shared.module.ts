import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NotFoundComponentComponent
  ],
  exports:[
    SidebarComponent,
    NotFoundComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
