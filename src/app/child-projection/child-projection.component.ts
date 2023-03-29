import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-projection',
  templateUrl: './child-projection.component.html',
  styleUrls: ['./child-projection.component.css']
})
export class ChildProjectionComponent implements OnInit {

  constructor() {
    console.log("Constructor - Child Projection")
   }

  ngOnInit(): void {
    console.log("ngOnInit - Child Projection");
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit - Child Project');
  }

}
