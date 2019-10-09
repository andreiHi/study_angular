import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from 'app/modal/modal.component';
import {RefDirective} from 'app/ref.directive';

@Component({
  selector: 'app-dyn',
  templateUrl: './dyn.component.html',
  styleUrls: ['./dyn.component.scss']
})
export class DynComponent implements OnInit {

  /**
   * {static: false} говорит о том что это поле не будет использовано в методе OnInit
   */
  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;

  /**
   * Фабрика для регтстрации компонента
   * @param resolver фабрика
   */
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    this.refDir.containerRef.clear(); // очищаем место вставки
    const component = this.refDir.containerRef.createComponent(modalFactory); // создаем компанент
    component.instance.title = 'Dynamic title'; // становятся доступны поля для изменения
    component.instance.closeButton.subscribe(() => {  // подписываемся на нажатие кнопки
      this.refDir.containerRef.clear(); // при нажатии удаляем модальное окно
    });

  }
}
