import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaDbzComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 1000
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  public deleteCharacter( id: string ): void {
    this.onDelete.emit( id );
  }

}
