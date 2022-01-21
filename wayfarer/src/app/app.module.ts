import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
<<<<<<< HEAD

import { SidebarComponent } from './homepage/sidebar/sidebar.component';
import { CityDetailsComponent } from './homepage/city-details/city-details.component';

=======
import { SidebarComponent } from './../app/homepage/sidebar/sidebar.component';
import { CityDetailsComponent } from './../app/homepage/city-details/city-details.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
>>>>>>> 0d6496fa9d0a466647829a869749579d0eab0099

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SidebarComponent,
    CityDetailsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
