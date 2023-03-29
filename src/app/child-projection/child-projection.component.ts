import { Component, ContentChild, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-child-projection',
  templateUrl: './child-projection.component.html',
  styleUrls: ['./child-projection.component.css']
})
export class ChildProjectionComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    console.log("Constructor - Child Projection")
  }

  ngOnInit(): void {
    console.log("ngOnInit - Child Projection");
  }

  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit - Child Project');
  // }

  @ContentChild('header') headerContent!: ElementRef;

  ngAfterContentInit() {
    this.headerContent.nativeElement.innerText = "Angular Example";
    this.renderer.setStyle(this.headerContent.nativeElement, "backgroundColor", "yellow");
  }

}
