import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef) { }

  //@Input() set appMyIf(condition: boolean) {
  @Input('appMyIf') set change(condition: boolean) {
    if (condition) {
      this.view.createEmbeddedView(this.template);
    }
    else {
      this.view.clear();
    }
  }

}
