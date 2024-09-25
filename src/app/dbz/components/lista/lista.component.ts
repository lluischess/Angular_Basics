import { Component, Input } from '@angular/core';
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
}
