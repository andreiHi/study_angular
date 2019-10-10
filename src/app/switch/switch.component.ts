import {Component, forwardRef, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

/**
 * Провайдер для того чтоб создать компонент который можно использовать
 * в виде Модели [(ngModel)]
 */
const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,  // тип сущности
  useExisting: forwardRef(() => SwitchComponent),
  multi: true
};

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class SwitchComponent implements ControlValueAccessor {

  state = 'off';

  setState(state: string) {
    this.state = state;
    this.onChange(this.state);
  }

  private onChange = (value: any) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * для мобильных устройств
   * @param fn функция
   */
  registerOnTouched(fn: any): void {
  }

  /**
   * предназначин для блокировки модели
   */
  setDisabledState(isDisabled: boolean): void {
  }

  /**
   * Получает значение от ngModel и записывает из app-comp
   * @param state функ
   */
  writeValue(state: string): void {
    this.state = state;
    console.log('state', state);
  }
}
