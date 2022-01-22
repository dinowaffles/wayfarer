import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


import { SidebarComponent } from './../app/homepage/sidebar/sidebar.component';
import { CityDetailsComponent } from './../app/homepage/city-details/city-details.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { PostsComponent } from './homepage/posts/posts.component';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SidebarComponent,
    CityDetailsComponent,
    HomepageComponent,
    PostsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
