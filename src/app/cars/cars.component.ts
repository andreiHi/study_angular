import { Component } from '@angular/core';
import {Car} from '../car/car';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

    constructor() { }
    carName = '';
    year = 2017;

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

    addCar() {
        this.cars.push({name : this.carName, year : this.year });
        this.carName  = '';
        this.year = 2017;
    }
}
