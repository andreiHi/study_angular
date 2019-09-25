import {Component, Input} from '@angular/core';
import {ConsoleService} from '../console.service';
import {Car} from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
})
export class CarComponent {

  @Input() carItem: Car;

constructor(private service: ConsoleService) {}
  getClass() {
    return {
      'list-group-item-success': !this.carItem.isSold,
      'list-group-item-danger': this.carItem.isSold,
      'list-group-item': true,
    };
  }

  onAction(type: string) {
    this.carItem.isSold = type === 'buy';
    this.service.log(`${this.carItem.name} status = ${type}`);
  }
}
