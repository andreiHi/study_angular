import {Component, OnInit, ViewChild} from '@angular/core';
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

  defaultAnswer = 'no';
  defaultCountry = 'ru';
  formDate = { };
  isSubmited = false;
  // @ts-ignore
  @ViewChild('form') form: NgForm;

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    this.isSubmited = true;
    this.formDate = this.form.value;
    this.form.reset();
  }

  addRandEmail() {
    const randEmail = 'sss@gmail.com';
    // this.form.setValue({  использовать не очень хорошо так как стирает все что было заполнено в остальной форме
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });
    this.form.form.patchValue({
      user: {email: randEmail }
    });
  }
}
