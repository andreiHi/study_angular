import {Component, OnInit} from '@angular/core';
import {BUILD_TIMESTAMP, SERVER_API_URL} from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front';

  ngOnInit(): void {
    console.log(SERVER_API_URL);
  }
}
