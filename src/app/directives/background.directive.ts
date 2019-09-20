import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBackGround]'
})
export class BackgroundDirective implements OnInit {

    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
        console.log(this.elementRef);
        this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
}
