import {Component} from '@angular/core';
import {Car} from '../car/car';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
    // encapsulation: ViewEncapsulation.None отменяет локальную видимость css и они распростроняются на все дочернии компоненты
    // encapsulation: ViewEncapsulation.Native отменяет все  css и бутстрап в том числе
})
export class CarsComponent {

    constructor() { }

    cars: Car[] = [{
        name: 'Ford',
        year: 2015,
        isSold: false
    }, {
        name: 'Audi',
        year: 2010,
        isSold: false
    }, {
        name: 'BMW',
        year: 2011,
        isSold: true
    }
    ];

    addCarToList(car: Car) {
        this.cars.push(car);
    }

    changeCarName() {
        this.cars[0].name = 'New car Name!';
    }

    deleteCar() {
        this.cars.splice(0, 1);
    }
}
