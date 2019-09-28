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
  charsCount = 5;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({ // создаем экземпляр и передаем все контролы из формы
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
        pass: new FormControl('', [this.checkForLength.bind(this), Validators.required]) // для того чтоб передать в валидатор поле
      }),                                                                                        // из класса нужно использовать bind(this)
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submited', this.form);
  }

  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
      return {
        'lengthError': true
      };
    }
    return null;
  }

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
