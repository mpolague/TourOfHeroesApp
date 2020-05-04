import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


//The '@Component' is a decorator function that specifies the Angular metadata for the component
@Component({
  selector: 'app-heroes',  //The component's CSS element selector
  templateUrl: './heroes.component.html',  //the location of the component's template file
  styleUrls: ['./heroes.component.css'] //the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {   } //identifies it as a HeroService injection site

  //The 'ngOnInit' is a lifecycle hook. Angular will call 'ngOnInit' after creating a component
  //it is meant for a good place to put initialization logic
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //waits for the Observable to emit the array of heroes
    //the subscribe() method passes the emitted array to the callback -> which sets the component's
    //heroes properties
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
