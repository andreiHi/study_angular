import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  constructor() { }
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  dates = [
      new Date(2015, 3, 25).toDateString(),
      new Date(2011, 4, 11).toDateString(),
      new Date(2017, 2, 8) .toDateString(),
      new Date(2000, 1, 13).toDateString()
  ];

  carName = '';
  addCarStatus = false;

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName  = '';
  }


}
