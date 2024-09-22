import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn:"root" //Nuestro servicio sera un singleton en toda la aplicacion mediante Injeccion de dependencias
})
export class DbzService{

  public characters:Character[] = [
    {
      id:uuid(),
      name:"Krillin",
      power:1000,
    },
    {
      id:uuid(),
      name:"Goku",
      power:9500
    },
    {
      id:uuid(),
      name:"Vegeta",
      power:7500
    }
  ];

  public addCharacter(character:Character):void {
    const newCharacter:Character = {
      id:uuid(),
      ...character,
    };
    this.characters.unshift(newCharacter);
  }

  public deleteCharacterById(uuid:string):void{
    this.characters = this.characters.filter(character => character.id !== uuid);
  }

};