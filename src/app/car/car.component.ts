import {AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild} from '@angular/core';
import {Car} from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements AfterViewInit {

  @Input() carItem: Car;

  // @ts-ignore
  @ContentChild('carHeading') carHeading: ElementRef; // позволяет получить данные из ng-content

  ngAfterViewInit() {
    console.log(this.carHeading);
  }

}
