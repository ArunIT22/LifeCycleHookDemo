import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {

  constructor(private element: ElementRef, private render: Renderer2) { }

  // ngOnInit() {
  //   this.render.setStyle(this.element.nativeElement, "backgroundColor", "yellow");
  // }

  //HostListener Decrator - Listen to the Event
  @HostListener('mouseenter') onMouseOver() {
    this.render.setStyle(this.element.nativeElement, "backgroundColor", "yellow");
    this.render.setStyle(this.element.nativeElement, "margin", "30px 30px");
    this.render.setStyle(this.element.nativeElement, "padding", "30px 30px");
    this.render.setStyle(this.element.nativeElement, "transition", "2s");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.element.nativeElement, "backgroundColor", "lightblue");
    this.render.setStyle(this.element.nativeElement, "margin", "0px 0px");
    this.render.setStyle(this.element.nativeElement, "padding", "20px 20px");
    this.render.setStyle(this.element.nativeElement, "transition", "2s");
  }
}
