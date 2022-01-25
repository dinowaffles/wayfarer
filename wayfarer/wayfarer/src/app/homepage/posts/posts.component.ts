import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../cities';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  cities = CITIES;

  postsIndex: string|null = '';
  title: string|null = '';
  posts: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postsIndex = params.get('id');
      this.posts = CITIES.find(posts => {
        let paramId: string = params.get('id') || '';
        return posts.id === parseInt(paramId);
      });
    });

    this.route.queryParams.subscribe(params => {
      this.title = params['title'];
    });
  }

}
