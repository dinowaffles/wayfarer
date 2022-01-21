import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './../homepage/sidebar/sidebar.component';
import { CityDetailsComponent } from './../homepage/city-details/city-details.component';



@NgModule({
  declarations: [
    HomepageComponent,
    SidebarComponent,
    CityDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomepageModule { }
