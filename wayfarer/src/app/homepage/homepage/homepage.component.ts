import { Component, OnInit } from '@angular/core';
import { CITIES } from '../cities';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  cities = CITIES;

  constructor() { }

  ngOnInit(): void {
  }

}
