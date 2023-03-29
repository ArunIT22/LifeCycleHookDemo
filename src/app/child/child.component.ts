import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() {
    console.log("Child Component - Constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit - Child Component");
  }

  @Input() name: string = '';

  ngOnChanges(changes: SimpleChange) {
    console.log("ngOnChanges - Child Component :", changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck - Child Component");
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit - Child Component');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked - Child Component');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit - Child Component');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked - Child Component');
  }

  ngOnDestroy(){
    console.log("Child Component Destroyed");
  }
}
