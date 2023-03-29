import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) { }

  @Input() set appDelay(sleepTime: number) {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template)
    }, sleepTime);
  }

}
