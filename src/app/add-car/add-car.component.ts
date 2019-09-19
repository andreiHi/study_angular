import {Component, EventEmitter, Output} from '@angular/core';
import {Car} from '../car/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  carName = '';
  year = 2017;
  @Output()carEmitter = new EventEmitter<Car>();

  addCar() {
    this.carEmitter.emit(new Car(this.carName, this.year));
    this.carName  = '';
    this.year = 2017;
  }
}
