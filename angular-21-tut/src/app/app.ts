import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile],
  templateUrl: './app.html',
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
