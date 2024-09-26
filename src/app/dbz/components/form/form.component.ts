import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormDbzComponent {
  public newCharacter: Character = {
    name: '',
    power: 0
  }

  public emitCharacter(): void {
    console.log(this.newCharacter);
  }

}
