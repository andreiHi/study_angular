import {Directive, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appColor]'
})
export class BackgroundDirective implements OnInit {

    @HostBinding('style.color') color = 'black';

    constructor(private elementRef: ElementRef) {

    }

    /**
     * Закоментированный код позволяет изменять стиль у нативного элемента
     */
    ngOnInit() {
        // console.log(this.elementRef);
        // this.elementRef.nativeElement.style.backgroundColor = 'red';
        this.color = 'blue';
    }
}
