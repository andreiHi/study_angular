import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ConsoleService} from '../../console.service';
import {Car} from './car';
import {CarsService} from '../../cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
})
export class CarComponent {

  @Input() carItem: Car;
  colors = [
      'red',
      'blue',
      'green',
      'pink',
      'yellow',
      'grey'
  ];
  @Output() carDeleteEmitter = new EventEmitter();

constructor(private service: ConsoleService, private carService: CarsService) {}
  getClass() {
    return {
      'list-group-item-success': !this.carItem.isSold,
      'list-group-item-danger': this.carItem.isSold,
      'list-group-item': true,
    };
  }

  onAction(type: string) {
    this.carItem.isSold = type === 'buy';
    this.carService.changeBuy(this.carItem, type === 'buy').subscribe((data) => this.service.log(data.toString()));
    this.service.log(`${this.carItem.name} status = ${type}`);
  }

  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor() {
      console.log(this.carItem.id);
      this.carService.changeColor(this.carItem, this.getRandomColor()).subscribe((data) => console.log(data));
  }

  deleteCar() {
    this.carService.delete(this.carItem).subscribe((data) => {
      this.service.log(data.toString());
      this.carDeleteEmitter.emit(this.carItem.id);
    });
  }
}
