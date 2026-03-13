import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter :number = 0;

  increaseCounter(){
    this.counter++;
  }
  decreaseCounter(){
    if(this.counter<=0){
      alert("count is its default value");
      return;
    }
    this.counter--;
  }

  setDefault(){
    this.counter = 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
