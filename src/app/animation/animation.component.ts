import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styles: [],
  animations: [
      trigger('clickedDiv', [
          state('start', style({
            backgroundColor: 'blue',
            width: '150px',
            height: '150px'
          })),
          state('end', style({
            backgroundColor: 'red',
            width: '300px',
            height: '300px'
          })),
          transition('start => end', animate(800)),
          transition('end => start', animate('800ms 0.5s ease-out')),
      ])
  ]
})
export class AnimationComponent implements OnInit {

  clickedDiveState = 'start';

  constructor() { }

  ngOnInit() {
  }

  changeDivState() {
    this.clickedDiveState = 'end';
    setTimeout(() => {
      this.clickedDiveState = 'start';
    }, 3000);
  }
}
