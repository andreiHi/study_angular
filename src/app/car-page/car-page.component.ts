import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {
  id: number;
  name: string;
  year: string;
  color: string;
  hash: string;
  constructor(private rout: ActivatedRoute, private router: Router) { }

  /**
   * snapshot не отслеживает динамически изменяемый роут
   *  this.rout.params.subscribe( позволяет подписаться на изменения
   *   this.rout.queryParams.subscribe получение параметров перечисленные через ?
   *   this.rout.fragment.subscribe( получение хэша то что идет после #
   */
  ngOnInit() {
    // this.id = +this.rout.snapshot.params['id'];
    // this.name = this.rout.snapshot.params['name'];

    this.rout.params.subscribe((param: {id: number, name: string}) => {
      this.id = param.id;
      this.name = param.name;
    });
    this.rout.queryParams.subscribe((param: {color: string, year: string}) => {
      this.color = param.color;
      this.year = param.year;
    });
    this.rout.fragment.subscribe((param) => {
      this.hash = param;
    });
  }

  openMazdaPage() {
    this.router.navigate(['./cars', 8, 'Mazda'], {
      queryParams: {
        color: 'pin',
        year: 1995
      },
      fragment: 'pic'
    });
  }
}
