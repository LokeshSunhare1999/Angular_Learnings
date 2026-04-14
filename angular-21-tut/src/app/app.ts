import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './first.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-21-tut');
  name="Lokesh";
  age = "25";

  updateName(){
    this.name = "20"; // can't assign number bcoz initially it is string and type of variable can't be changed in typescript
  }
}
