import { Component } from "@angular/core";

@Component({
  selector:"app-counter", //Se acostumbra que todos los componentes personalizados empiezen por 'app'
  template:`
    <h2>Counter: {{counter}}</h2>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreasedBy(1)">-1</button>
    <button (click)="reset()">Reset</button>
  `
})
export class CounterComponent {

  public counter:number = 10;

  public increaseBy(value:number = 1):void{
    this.counter += value;
  }

  public decreasedBy(value:number = 1):void{
    this.counter -= value;
  }

  public reset():void{
    this.counter = 10;
  }

};