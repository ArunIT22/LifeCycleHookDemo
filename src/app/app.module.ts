import { ApplyCoralBackgroundDirective } from './CustomDirectives/apply-coral-background.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ParentProjectionComponent } from './parent-projection/parent-projection.component';
import { ChildProjectionComponent } from './child-projection/child-projection.component';
import { DemoComponent } from './demo/demo.component';
import { ApplyBorder2Directive } from './CustomDirectives/apply-border2.directive';
import { MouseOverDirective } from './CustomDirectives/mouse-over.directive';
import { DynamicDirective } from './CustomDirectives/dynamic.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ParentProjectionComponent,
    ChildProjectionComponent,
    ApplyCoralBackgroundDirective,
    DemoComponent,
    ApplyBorder2Directive,
    MouseOverDirective,
    DynamicDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
