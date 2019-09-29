import {Car} from './car/car';
import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable() // говорит о том что в данный класс можно что либо инжектить
export class CarsService {

    constructor(private consoleService: ConsoleService, private http: HttpClient) {}

    addCar(car: Car) {
        // this.cars.push(car);
        this.consoleService.log(`Машина ${car.name} была добавлена`);
    }

    getCars() {
        return this.http.get('/cars');
    }
}
