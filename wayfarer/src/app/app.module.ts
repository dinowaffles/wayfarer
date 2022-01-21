import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


import { SidebarComponent } from './../app/homepage/sidebar/sidebar.component';
import { CityDetailsComponent } from './../app/homepage/city-details/city-details.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { PostsComponent } from './homepage/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SidebarComponent,
    CityDetailsComponent,
    HomepageComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
