import {Car} from './car/car';
import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

@Injectable() // говорит о том что в данный класс можно что либо инжектить
export class CarsService {

    constructor(private consoleService: ConsoleService, private http: HttpClient) {}

    addCar(car: Car): Observable<Car> {
        this.consoleService.log(`Машина ${car.name} была добавлена`);
        return this.http.post<Car>('/cars', car);
    }

    getCars(): Observable<Car[]> {
        let params = new HttpParams();
        params = params.append('_limit', '4');
        params = params.append('custom', 'anything');
        return this.http.get<Car[]>('/cars',
            {
                params, // ередача параметров в url запроса
                observe: 'response' // данный флаг позволяет получить целиком (хэдер статус и тд)ответ сервера
            })
            .pipe(
                map( response => {
           //         console.log('Response ', response);
                    return  response.body;
                }),
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
        return this.http.put<Car>(`/cars/${car.id}`, car,
            {
             responseType: 'json' // позволяет изменить тип возвращаемого значения по умолчаниэ это json
            });
    }

    delete(car: Car): Observable<any> {
        return this.http.delete<void>(`/cars/${car.id}`, {
            observe: 'events' // данный флаг позволяет отслеживать все события по отправке и получению запроса
        }).pipe(
            tap(event => { // позволяет получать события по шагово
                console.log(event);
                if (event.type === HttpEventType.Sent) {
                    console.log('Send', event);
                }
                if (event.type === HttpEventType.Response) {
                    console.log('response', event);
                }
            })
        );
    }
}
