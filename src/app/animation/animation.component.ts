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
          state('active', style({
            backgroundColor: 'orange',
            width: '170px',
            height: '170px'
          })),
          transition('start <=> end', animate(800)),
          transition('start => active', animate(400)),
          transition('active => end', animate(400))
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
    }, 2000);
  }
}
