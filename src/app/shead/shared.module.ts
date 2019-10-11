import {NgModule} from '@angular/core';
import {BackgroundDirective} from '../shead/background.directive';

@NgModule({
    declarations: [
        BackgroundDirective
    ],
    exports: [
        BackgroundDirective
    ]
})
export class SharedModule { }

