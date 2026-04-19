import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-21-tut');
  name = 'Lokesh';
  age = '25';
count = 0;
  counter(action: string) {
    if (action === 'plus') {
      this.count++;
    } else if (action === 'minus') {
      if (this.count > 0) {
        this.count--;
      }
    }
    console.log(this.count);
    this.updateName();
  
  }

  updateName() {
    this.name = '20'; // can't assign number bcoz initially it is string and type of variable can't be changed in typescript
  }
}
