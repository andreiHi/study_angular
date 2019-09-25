import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from '@angular/forms';
import { AddCarComponent } from './add-car/add-car.component';
import { DirComponent } from './dir/dir.component';
import {BackgroundDirective} from './directives/background.directive';
import { DirectiveDirective } from './directive.directive';
import { ForPipesComponent } from './pipe/for-pipes.component';
import { PowPipe } from './pipe/pow.pipe';
import { DynamicComponent } from './filter/dynamic.component';
import {CarFilterPipe} from './filter/carFilterPipe';
import {CarsService} from 'app/cars.service';
import {ConsoleService} from 'app/console.service';



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
        CarFilterPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [CarsService, ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
