import { Component, OnInit } from '@angular/core';
import {Check} from '../form/check';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        pass: new FormControl('', Validators.required)
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submited', this.form);
  }
}
