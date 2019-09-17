import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  constructor() { }

  inputText = 'Default text';
  addCarStatus = '';

  addCar() {
    this.addCarStatus = 'Машина добавлена';
  }

  onKeyUp(value) {
    this.inputText = value.target.value;
  }

  inText(value: string) {
    this.inputText = value;
  }
}
