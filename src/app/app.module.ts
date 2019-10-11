import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DirComponent} from './dir/dir.component';
import {DirectiveDirective} from './directive.directive';
import {ForPipesComponent} from './pipe/for-pipes.component';
import {PowPipe} from './pipe/pow.pipe';
import {DynamicComponent} from './filter/dynamic.component';
import {CarFilterPipe} from './filter/carFilterPipe';
import {FormComponent} from './form/form.component';
import {RegisterComponent} from './register/register.component';
import {AppInterceptor} from './http/app-interceptor';
import {ConsoleService} from './console.service';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthService} from './auth.service';
import {SwitchComponent} from './switch/switch.component';
import {ModalComponent} from './modal/modal.component';
import {DynComponent} from './dyn/dyn.component';
import {RefDirective} from './ref.directive';
import {CarsModule} from './cars_module/cars.module';
import {SharedModule} from './shead/shared.module';

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
        AppComponent,
        DirComponent,
        DirectiveDirective,
        ForPipesComponent,
        PowPipe,
        DynamicComponent,
        CarFilterPipe,
        FormComponent,
        RegisterComponent,
        HomeComponent,
        NotFoundComponent,
        SwitchComponent,
        ModalComponent,
        DynComponent,
        RefDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CarsModule,
        SharedModule
    ],
  providers: [
       INTERCEPTOR_PROVIDER, ConsoleService, AuthService
  ],
    entryComponents: [ModalComponent], // встроенный комонеты которых нет в шаблоне
  bootstrap: [AppComponent]
})
export class AppModule { }
