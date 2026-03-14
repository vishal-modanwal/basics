import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setinput',
  templateUrl: './setinput.component.html',
  styleUrls: ['./setinput.component.css']
})
export class SetinputComponent implements OnInit {
  userName = "";
  greeting = "";
  getInput(event : Event){
    this.userName= (event.target as HTMLInputElement).value;
  }
  greet(event : Event){
    console.log(this.userName);
      this.greeting =`Hello ${this.userName}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
