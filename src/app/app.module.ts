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

@NgModule({
    declarations: [
        AppComponent,
        CarsComponent,
        CarComponent,
        AddCarComponent,
        DirComponent,
        BackgroundDirective,
        DirectiveDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
