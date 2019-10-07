import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  text = 'Это приложение посвяженное изучению Angular ';
  constructor() { }

  ngOnInit() {
  }

}
