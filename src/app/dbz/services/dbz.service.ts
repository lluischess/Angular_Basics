import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters : Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 100
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    }
  ];

  public addCharacter(Newcharacter: Character): void {
    // Esto pilla las propiedades del objeto
    const newcharacter : Character = {id: uuid(),...Newcharacter};
    this.characters.push(newcharacter);
    console.log(this.characters);
  }

  // public onDeleteCharacter( index: number ): void {
  //   console.log({ index });
  //   this.characters.splice(index, 1);
  // }

  public onDeleteCharacterbyId(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
