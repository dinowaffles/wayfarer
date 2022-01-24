
import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { sortAndDeduplicateDiagnostics } from 'typescript';
import { CITIES } from '../cities';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cities = CITIES;

  cityIndex: string|null = '';
  name: string|null = '';
  city: any;

  postsIndex: string|null = '';
  title: string|null = '';
  posts: any;

  isShown: boolean = false; 

  author: string = '';
  date: string = '';
  posttitle: string = '';
  posttext: string = '';

  // userPost = new FormGroup({
  //   postTitle: new FormControl('', [Validators.minLength(1), Validators.maxLength(200)]),
  //   postText: new FormControl('', [Validators.required])
  // })


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cityIndex = params.get('id');
      this.city = CITIES.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      });
    });

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });

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

    this.city.posts = this.city.posts.sort((a:any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());

  }
    
  
  toggleShow() {
    this.isShown = ! this.isShown;
  }

  postSubmit() {
    console.log(this.author);
  }

  // get postTitle () {
  //   return this.userPost.get('postTitle');
  // }

  // get postText() {
  //   return this.userPost.get('text');
  // }
}
