import { Component, OnInit } from '@angular/core';
import {Check} from '../form/check';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  answers: Check[] = [
    {
      type: 'yes', text: 'Да'
    },
    {
      type: 'no', text: 'Нет'
    }];
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({ // создаем экземпляр и передаем все контролы из формы
      email: new FormControl(''),
      pass: new FormControl(''),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submited', this.form);
  }
}
