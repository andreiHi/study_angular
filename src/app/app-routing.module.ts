import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DirComponent} from 'app/dir/dir.component';
import {ForPipesComponent} from 'app/pipe/for-pipes.component';
import {DynamicComponent} from 'app/filter/dynamic.component';
import {CarsComponent} from 'app/cars/cars.component';


const routes: Routes = [
  {path: '', component: CarsComponent},
  {path: 'directive', component: DirComponent},
  {path: 'pipes', component: ForPipesComponent},
  {path: 'dynamic', component: DynamicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
