import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
    title = 'Main Page';

    constructor(private dbzService: DbzService) {}

    get Characters(): Character[] {
        return [...this.dbzService.characters];
      }

      onDeleteCharacter(id: string): void {
        this.dbzService.onDeleteCharacterbyId(id);
      }

      onaddCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
      }
}
