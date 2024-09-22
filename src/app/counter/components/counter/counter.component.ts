import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter: number = 0;

  increment(): void {
    this.counter += 1;
  }

  decrement(): void {
    this.counter -= 1;
  }

  resetcounter(): number{
    return this.counter = 0;
  }
}
