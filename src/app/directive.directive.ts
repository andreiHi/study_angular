import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class DirectiveDirective implements OnInit {

  @Input('appTextColor')hoverColor = 'green';
  @Input()defaultColor = 'transparent';
  @HostBinding('style.backgroundColor') background: string;

  constructor(private el: ElementRef) {
    console.log(el);
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
  }

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

}
