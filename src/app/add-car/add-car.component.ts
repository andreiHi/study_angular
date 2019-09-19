import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Car} from '../car/car';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  carName = '';
  year = 2017;
  @Output()carEmitter = new EventEmitter<Car>();

  // @ts-ignore
  @ViewChild('carYearInput') carYearInput: ElementRef;

  addCar(name: HTMLInputElement) {
    this.year = +this.carYearInput.nativeElement.value;
    this.carName = name.value;
    this.carEmitter.emit(new Car(this.carName, this.year));
    this.carName  = '';
    this.year = 2017;
  }
}
