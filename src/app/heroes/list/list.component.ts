import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public title: string = 'Hero list:';
  public heroNames: string[] = ['Spiderman','Ironman','She Hulk', 'Thor'];
  public deletedHero: string[] = [];


  deteteHero(id:number):void{
    if (id > -1 && id < this.heroNames.length){
      this.deletedHero.push(this.heroNames[id]);
      this.heroNames.splice(id,1);
    }
  }

}
