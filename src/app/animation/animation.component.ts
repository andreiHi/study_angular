import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {clickedDiv, divTrigger, multi} from '../animation/app.animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styles: [],
  animations: [
      clickedDiv,
      multi,
      divTrigger
  ]
})
export class AnimationComponent implements OnInit {

  clickedDiveState = 'start';
  multiState = 'start';
  isVisible = false;

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
