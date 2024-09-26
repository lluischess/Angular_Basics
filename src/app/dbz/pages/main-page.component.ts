import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    title = 'Main Page';
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
