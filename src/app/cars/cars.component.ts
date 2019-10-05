import {Component, OnInit} from '@angular/core';
import {Car} from '../car/car';
import {CarsService} from '../cars.service';
import {delay} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.scss']
    // encapsulation: ViewEncapsulation.None отменяет локальную видимость css и они распростроняются на все дочернии компоненты
    // encapsulation: ViewEncapsulation.Native отменяет все  css и бутстрап в том числе
})
export class CarsComponent implements OnInit {

    cars: Car[] = [];
    loading = false;
    error = '';
    appTitle;
    constructor(private service: CarsService, private router: Router, private rout: ActivatedRoute) { }

    loadCars() {
        this.loading = true;
        this.service.getCars()
   //         .pipe(delay(500)) // эмуляция работы сервера
            .subscribe((cars) => {
            console.log(cars);
            this.cars = cars;
            this.loading = false;
        }, error => {
                this.error = error.message;
            }
        );
    }

    updateArray(car: Car) {
        this.cars.push(car);
    }

    deleteCar(id: number) {
        this.cars = this.cars.filter(c => c.id !== id);

    }

    /**
     * получаем объект Observable и присваиваем его переменной без подписки
     * подписка происходит в шаблоне с помощью |async
     * так же можно использовать для массивов добавив
     * *ngFor="let car of cars" [carItem]="car" | async
     */
    ngOnInit(): void {
        this.appTitle = this.service.getAppTitle();
        this.loadCars();
    }

    /**
     * Использовыаание програмного перехода с помощью относительного пути
     */
    openDirective() {
        this.router.navigate(['/directive']);
    }

    /**
     * использование програмного перехода с помощью абсолютного пути
     * relativeTo относительно чего нужно делать переход
     * private rout: ActivatedRoute теккущий активный роут
     */
    openPipes() {
        this.router.navigate(['pipes'], {relativeTo: this.rout});
    }
}
