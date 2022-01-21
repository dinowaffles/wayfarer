import { Component, OnInit } from '@angular/core';
import { CITIES } from '../homepage/cities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cities = CITIES;

  constructor() { }

  ngOnInit(): void {
  }

}
