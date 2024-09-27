import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters : Character[] = [
    {
      name: 'Krillin',
      power: 100
    },
    {
      name: 'Goku',
      power: 9000
    }
  ];

  public addCharacter(Newcharacter: Character): void {
    //this.characters.push(character);
    console.log(Newcharacter);
    this.characters.push(Newcharacter);
    console.log(this.characters);
  }

  public onDeleteCharacter( index: number ): void {
    console.log({ index });
    this.characters.splice(index, 1);
  }
}
