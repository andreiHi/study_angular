import { Component } from '@angular/core';
import {Car} from '../car/car';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

    constructor() { }

    cars: Car[] = [{
        name: 'Ford',
        year: 2015
    }, {
        name: 'Audi',
        year: 2010
    }, {
        name: 'BMW',
        year: 2011
    }];

    updateCarList(car: Car) {
        this.cars.push(car);
    }

}
