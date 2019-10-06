import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {
  id: number;
  name: string;
  constructor(private rout: ActivatedRoute) { }

  /**
   * snapshot не отслеживает динамически изменяемый роут
   *  this.rout.params.subscribe( позволяет подписаться на изменения
   */
  ngOnInit() {
    // this.id = +this.rout.snapshot.params['id'];
    // this.name = this.rout.snapshot.params['name'];

    this.rout.params.subscribe((param: {id: number, name: string}) => {
      this.id = param.id;
      this.name = param.name;
    });
  }

}
