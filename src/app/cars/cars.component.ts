import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  constructor() { }
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];

  carName = '';
  addCarStatus = false;

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName  = '';
  }


  setBigCarText(car: string) {
    return car.length > 4;
  }
}
