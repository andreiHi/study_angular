import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DirComponent} from './dir/dir.component';
import {ForPipesComponent} from './pipe/for-pipes.component';
import {DynamicComponent} from './filter/dynamic.component';
import {FormComponent} from './form/form.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {DynComponent} from './dyn/dyn.component';
import {AnimationComponent} from 'app/animation/animation.component';


const routes: Routes = [
 // {path: '', redirectTo: '/cars', pathMatch: 'full'}, так можно сделать редирект на нужную страницу
  {path: '', component: HomeComponent},
  { path: 'cars', loadChildren: './cars_module/cars.module#CarsModule' },
  {path: 'directive', component: DirComponent},
  {path: 'pipes', component: ForPipesComponent},
  {path: 'dynamic', component: DynamicComponent},
  {path: 'login', component: FormComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dynamicComp', component: DynComponent},
  {path: 'animation', component: AnimationComponent}
  // ,
  // {path: '**', component: NotFoundComponent} ??? не понятно как настроить при нескольких модулях
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules  // Позволяет загружать остальные модули(lazy) после загрузки главного модуля
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
