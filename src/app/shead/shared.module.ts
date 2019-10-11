import {NgModule, Provider} from '@angular/core';
import {BackgroundDirective} from '../shead/background.directive';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppInterceptor} from 'app/http/app-interceptor';

/**
 * Можно вынести в отдельную функцию
 * и передовать в качестве параметра класс который нужно добавить
 */
const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS, // что это такое (тип сущности)
    useClass: AppInterceptor, // какой класс использовать
    multi: true // поддержка нескольких подобных сущностей
};

@NgModule({
    declarations: [
        BackgroundDirective
    ],
    exports: [
        BackgroundDirective
    ],
    providers: [INTERCEPTOR_PROVIDER]
})
export class SharedModule { }

