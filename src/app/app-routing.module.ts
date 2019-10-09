import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DirComponent} from './dir/dir.component';
import {ForPipesComponent} from './pipe/for-pipes.component';
import {DynamicComponent} from './filter/dynamic.component';
import {CarsComponent} from './cars/cars.component';
import {FormComponent} from './form/form.component';
import {RegisterComponent} from './register/register.component';
import {CarPageComponent} from './car-page/car-page.component';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuard} from './auth-guard.service';
import {DynComponent} from './dyn/dyn.component';


const routes: Routes = [
 // {path: '', redirectTo: '/cars', pathMatch: 'full'}, так можно сделать редирект на нужную страницу
  {path: '', component: HomeComponent},
    // регистрация дочернего роута и гвардов требующие авторизации
  {path: 'cars', component: CarsComponent, canActivate: [AuthGuard], children: [
      {path: ':id/:name', component: CarPageComponent},
    ]},
  {path: 'directive', component: DirComponent},
  {path: 'pipes', component: ForPipesComponent},
  {path: 'dynamic', component: DynamicComponent},
  {path: 'login', component: FormComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dynamicComp', component: DynComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
