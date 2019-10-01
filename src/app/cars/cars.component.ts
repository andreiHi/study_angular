import { Component } from '@angular/core';
import {Car} from '../car/car';
import {CarsService} from '../cars.service';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
    // encapsulation: ViewEncapsulation.None отменяет локальную видимость css и они распростроняются на все дочернии компоненты
    // encapsulation: ViewEncapsulation.Native отменяет все  css и бутстрап в том числе
})
export class CarsComponent {

    cars: Car[] = [];
    constructor(private service: CarsService) { }

    loadCars() {
        this.service.getCars().subscribe((cars) => {
      //      const data = response.json();
            console.log(cars);
            this.cars = cars;
        });
    }

    updateArray(car: Car) {
        this.cars.push(car);
    }

    deleteCar(id: number) {
        this.cars = this.cars.filter(c => c.id !== id);

    }
}
