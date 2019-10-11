import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AddCarComponent} from '../cars_module/add-car/add-car.component';
import {CarComponent} from '../cars_module/car/car.component';
import {CarPageComponent} from '../cars_module/car-page/car-page.component';
import {CarsComponent} from '../cars_module/cars/cars.component';
import {CarsService} from '../cars.service';
import {AuthGuard} from '../auth-guard.service';
import {CarsRoutingModule} from '../cars_module/cars-routing.module';
import {SharedModule} from '../shead/shared.module';


@NgModule({
    declarations: [
        AddCarComponent,
        CarComponent,
        CarPageComponent,
        CarsComponent
    ],
    imports: [
        CommonModule, // Это для дочерних модулей вместо BrowserModule который может быть только один на все приложение
        CarsRoutingModule,
        FormsModule,
        HttpClientModule,
        SharedModule
    ],
    providers: [
        CarsService, AuthGuard
    ]
})
export class CarsModule {
}
