import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDirectiv]'
})
export class DirectiveDirective implements OnInit {

  @Input('appDirectiv')hoverColor = 'green';
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
