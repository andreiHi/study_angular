import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from 'app/cars_module/cars/cars.component';
import {AuthGuard} from '../auth-guard.service';
import {CarPageComponent} from '../cars_module/car-page/car-page.component';

const carsRoutes: Routes = [
    // регистрация дочернего роута и гвардов требующие авторизации
    {
        path: '', component: CarsComponent,   canActivate: [AuthGuard],
        children: [
            {path: ':id/:name', component: CarPageComponent},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(carsRoutes) // регистрация дочерних роутов
    ],
    exports: [
        RouterModule
    ]
})
export class CarsRoutingModule { }
