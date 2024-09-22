import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public lastHeroeRemove:string | undefined = undefined;
  public heroNames:string[] = [
    'Spiderman',
    'IronMan',
    'Hulk',
    'SheHulk',
    'Thor'
  ];

  removeLastHeroe():void{
    this.lastHeroeRemove = this.heroNames.pop();
  }

}
