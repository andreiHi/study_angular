import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DirComponent} from './dir/dir.component';
import {ForPipesComponent} from './pipe/for-pipes.component';
import {DynamicComponent} from './filter/dynamic.component';
import {CarsComponent} from './cars/cars.component';
import {FormComponent} from './form/form.component';


const routes: Routes = [
  {path: '', component: CarsComponent},
  {path: 'directive', component: DirComponent},
  {path: 'pipes', component: ForPipesComponent},
  {path: 'dynamic', component: DynamicComponent},
  {path: 'login', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
