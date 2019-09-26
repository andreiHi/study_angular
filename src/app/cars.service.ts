import {Car} from './car/car';
import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';

@Injectable() // говорит о том что в данный класс можно что либо инжектить
export class CarsService {
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
constructor(private consoleService: ConsoleService) {}

    addCar(car: Car) {
        this.cars.push(car);
        this.consoleService.log(`Машина ${car.name} была добавлена`);
    }
}
