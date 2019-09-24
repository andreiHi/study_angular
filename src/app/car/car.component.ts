import {Component, ContentChild, ElementRef, Input} from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  @Input() carItem: Car;


  getClass() {
    return {
      'list-group-item-success': !this.carItem.isSold,
      'list-group-item-danger': this.carItem.isSold,
      'list-group-item': true,
    };
  }

  onAction(type: string) {
    this.carItem.isSold = type === 'buy';
  }
}
