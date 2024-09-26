import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormDbzComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: '',
    power: 0
  }

  public emitCharacter(): void {
    console.log(this.newCharacter);

    if (this.newCharacter.name.length === 0) {
      return;
    }
    const character = { ...this.newCharacter };
    this.onNewCharacter.emit(character);

    this.newCharacter.name = '';
    this.newCharacter.power = 0;
  }

}
