import {Component, ContentChild, ElementRef, Input} from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {

  @Input() carItem: Car;
  @Input() name: string;

  // @ts-ignore
  @ContentChild('carHeading') carHeading: ElementRef; // позволяет получить данные из ng-content


}
