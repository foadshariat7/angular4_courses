import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  age: number = 36;
  name: string = "Foad";
  btnClick = "Button is not clicked!";
  lastName = "";
  buttonClicked = false;

  tests = ['test1', 'test2', 'test3'];

  allowClick = false;

  constructor(){
    setTimeout(() => {
      this.allowClick = true;
    }, 5000);
  }  

  ngOnInit(){

  }

  onButtonClicked(){
    this.buttonClicked = true;
    this.btnClick = "Button now is clicked!";
    this.tests.push('test');
  }

  getName(){
    return this.name;
  }

  onInputChange(event: Event){
    this.lastName = (<HTMLInputElement>event.target).value;
  }

}
