import {Component, EventEmitter, Output} from '@angular/core';
import {CarsService} from '../cars.service';
import {Car} from '../car/car';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html',
    styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

    carName = '';
    year;
    @Output()carEmitter = new EventEmitter<Car>();
    constructor(private service: CarsService) {}

    addCar() {
        this.service.addCar(new Car(this.carName, this.year)).subscribe(
            (car: Car) => {
                this.carEmitter.emit(car); // передача данных в родительский компонент
                console.log(car);
            });
        this.carName  = '';
        this.year = '';
    }
}
