import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  colorCode: number;

  constructor() { 
      this.colorCode = Math.random();
   }

  ngOnInit() {
  }


  getColor(){
    return this.colorCode > 0.5 ? 'red' : 'green';
  }

}
