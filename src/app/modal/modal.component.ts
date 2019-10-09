import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = 'Default title'; // получаем значение снаружи
  @Output() closeButton = new EventEmitter<void>(); // отправляем событие наружу
  constructor() { }

  ngOnInit() {
  }

}
