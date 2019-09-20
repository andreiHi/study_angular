import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDirectiv]'
})
export class DirectiveDirective {

  @HostBinding('style.backgroundColor') background: string;

  constructor(private el: ElementRef) {
    console.log(el);
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = 'red';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = 'transparent';
  }

}
