import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  public name:string = "ironMan";
  public age:number = 45;

  // Los getters en todos los lenguajes POO es una propiedad que en si es un metodo
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHeroName():void{
    this.name = `spiderman`;
  }

  changeHeroAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = `ironMan`;
    this.age = 45;

    //Forma JS pura
    document.querySelectorAll("h1").forEach(element => {
      element.innerHTML = `<h1>Desde Angular</h1>`;
    });

  }

  

}
