import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Car} from '../car/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  carName = '';
  year;
  @Output()carEmitter = new EventEmitter<Car>();

  addCar() {
    this.carEmitter.emit(new Car(this.carName, this.year, false));
    this.carName  = '';
    this.year = '';
  }
}
