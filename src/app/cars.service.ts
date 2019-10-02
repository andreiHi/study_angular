import {Car} from './car/car';
import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';

@Injectable() // говорит о том что в данный класс можно что либо инжектить
export class CarsService {

    constructor(private consoleService: ConsoleService, private http: HttpClient) {}

    addCar(car: Car): Observable<Car> {
        this.consoleService.log(`Машина ${car.name} была добавлена`);
        return this.http.post<Car>('/cars', car);
    }

    getCars(): Observable<Car[]> {
        return this.http.get<Car[]>('/cars')
            .pipe(
                delay(500),
                catchError(error => {
                    this.consoleService.log(error.message);
                    return throwError(error);
                })
                );

    }

    changeColor(car: Car, color: string): Observable<Car> {
        car.color = color;
        return this.http.put<Car>(`/cars/${car.id}`,  car);
    }

    changeBuy(car: Car, isSold: boolean): Observable<Car> {
        car.isSold = isSold;
        return this.http.put<Car>(`/cars/${car.id}`, car);
    }

    delete(car: Car): Observable<void> {
        return this.http.delete<void>(`/cars/${car.id}`);
    }
}
