import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App! hello {{hero.name}}!</h1>'
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Iron'
  }
}

export class Hero {
  id: number;
  name: string;
}
