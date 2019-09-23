import { Component, OnInit } from '@angular/core';

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
