import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { PostsComponent } from './homepage/posts/posts.component';

const routes: Routes = [
  {
    path: 'cities/:id',
    component: HomepageComponent,
    children: [
      {
        path: 'cities/:id/posts/:id',
        component: PostsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
