import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styles: []
})
export class DirComponent implements OnInit {

  headerText = 'Создание своей директивы';
  items = [1, 2, 3, 4, 5];
  current = 1;
  constructor() { }

  ngOnInit() {
  }

  onClick(item: number) {
    this.current = item;
  }
}
