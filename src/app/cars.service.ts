import {Car} from 'app/car/car';

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

    addCar(car: Car) {
        this.cars.push(car);
    }
}
