import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApplyBorder2]'
})
export class ApplyBorder2Directive {

  constructor(private element: ElementRef, private render: Renderer2) { }

  ngOnInit() {
    this.render.setStyle(this.element.nativeElement, "border", "2px solid red");
    this.render.setStyle(this.element.nativeElement,"backgroundColor","lightblue");
    //this.render.addClass(this.element.nativeElement, "bg-primary");
    //this.render.setAttribute(this.element.nativeElement,"class","text-primary bg-dark")
  }
}
