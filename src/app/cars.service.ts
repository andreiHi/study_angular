import {Car} from './car/car';
import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable() // говорит о том что в данный класс можно что либо инжектить
export class CarsService {

    constructor(private consoleService: ConsoleService, private http: HttpClient) {}

    addCar(car: Car) {
        this.consoleService.log(`Машина ${car.name} была добавлена`);
        return this.http.post('/cars', car);
    }

    getCars() {
        return this.http.get<Car[]>('/cars');
    }

    changeColor(car: Car, color: string) {
        car.color = color;
        return this.http.put(`/cars/${car.id}`,  car);
    }

    changeBuy(car: Car, isSold: boolean) {
        car.isSold = isSold;
        return this.http.put(`/cars/${car.id}`, car);
    }
}
