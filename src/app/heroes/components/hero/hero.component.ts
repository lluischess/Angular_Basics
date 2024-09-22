import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public title: string = 'Hero:';
  public name: string = 'ironman';
  public age: number = 44;
  public power: string = 'money';
  public human: boolean = true;

  get capitalizedName(): string {
    return this.power.toUpperCase();
  }

  public capitalizeNamed(name:string): string {
    return name.toUpperCase();
  }

  getheroName():string {
    return `${this.name} - ${this.age}`;
  }

  changeName(name:string): string{
    return this.name = name;
  }

  changeAge(age:number): number{
    // document.querySelector('h1')!.innerHTML = '<h1> Desde angular</h1>';
    return this.age = age;
  }

}
