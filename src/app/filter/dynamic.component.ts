import { Component, OnInit } from '@angular/core';
import {from, fromEvent, Observable, Observer, of, Subscriber} from 'rxjs';
import {delay, map} from 'rxjs/operators';



@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styles: []
})
export class DynamicComponent implements OnInit {
  cars = [
    {name: 'Mazda', descr: 'WFM 1'},
    {name: 'Ford', descr: 'WFM 2'},
    {name: 'Bently', descr: 'WFM 3'},
    {name: 'Audi', descr: 'WFM 4'},
    {name: 'BMW', descr: 'WFM 5'}
  ];
  searchCar: string;

  asyncTitle = new Observable<string>((ob: Observer<string>) => {
    setInterval(() => ob.next('Динамический фильтр'), 3000);
  });

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  constructor() { }

  ngOnInit() {
  }


  addCar() {
    this.cars.push({
          name: 'New car',
          descr: 'WFM'
        });
  }
}
