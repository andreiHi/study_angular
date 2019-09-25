import {Component} from '@angular/core';
import {CarsService} from 'app/cars.service';
import {Car} from 'app/car/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  carName = '';
  year;

  constructor(private service: CarsService) {}

  addCar() {
    this.service.addCar(new Car(this.carName, this.year, false));
    this.carName  = '';
    this.year = '';
  }
}
