import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ApplyCoralBackground]'
})
export class ApplyCoralBackgroundDirective {

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = "Coral";
    this.element.nativeElement.style.border = "2px solid blue";
  }

}
