import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newName: string = '';

  isDestoryed: boolean = false;

  updateName(myName: HTMLInputElement) {
    this.newName = myName.value;
  }


  destroy() {
    this.isDestoryed = true;
  }

}
