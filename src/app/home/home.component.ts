import { Component, OnInit } from '@angular/core';
import {AuthService} from 'app/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  text = 'Это приложение посвяженное изучению Angular ';
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  changeAuthStatus(login: string) {
    login === 'login' ? this.auth.login() : this.auth.logOut();
  }
}
