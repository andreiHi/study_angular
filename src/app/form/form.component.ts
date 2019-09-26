import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Check} from './check';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  answers: Check[] = [
    {
      type: 'yes', text: 'Да'
    },
    {
      type: 'no', text: 'Нет'
    }];

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    console.log(form);
  }
}
