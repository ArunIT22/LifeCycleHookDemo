import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDynamic]'
})
export class DynamicDirective {

  constructor() {

  }

  ngOnInit(){
    this.background = this.defaultColor;
  }

  @Input() defaultColor: string = '';
  @Input() mouseEnter: string = '';
  @Input() mouseLeave: string = '';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;

  @HostListener('mouseenter') mouseenter() {
    this.background = this.mouseEnter;
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = this.mouseLeave;
  }
}
