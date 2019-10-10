import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars_module/cars/cars.component';
import { CarComponent } from './cars_module/car/car.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddCarComponent } from './cars_module/add-car/add-car.component';
import { DirComponent } from './dir/dir.component';
import {BackgroundDirective} from './shead/background.directive';
import { DirectiveDirective } from './directive.directive';
import { ForPipesComponent } from './pipe/for-pipes.component';
import { PowPipe } from './pipe/pow.pipe';
import { DynamicComponent } from './filter/dynamic.component';
import {CarFilterPipe} from './filter/carFilterPipe';
import {CarsService} from './cars.service';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppInterceptor} from './http/app-interceptor';
import {ConsoleService} from 'app/console.service';
import { CarPageComponent } from './cars_module/car-page/car-page.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
import { SwitchComponent } from './switch/switch.component';
import { ModalComponent } from './modal/modal.component';
import { DynComponent } from './dyn/dyn.component';
import {RefDirective} from './ref.directive';

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
        CarsComponent,
        CarComponent,
        AddCarComponent,
        DirComponent,
        BackgroundDirective,
        DirectiveDirective,
        ForPipesComponent,
        PowPipe,
        DynamicComponent,
        CarFilterPipe,
        FormComponent,
        RegisterComponent,
        CarPageComponent,
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
        HttpClientModule
    ],
  providers: [
      CarsService, INTERCEPTOR_PROVIDER, ConsoleService, AuthService, AuthGuard
  ],
    entryComponents: [ModalComponent], // встроенный комонеты которых нет в шаблоне
  bootstrap: [AppComponent]
})
export class AppModule { }
