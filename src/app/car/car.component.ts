import { Component, Input } from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent  {

  @Input() carItem: Car;


}
