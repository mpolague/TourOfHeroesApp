import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


//The '@Component' is a decorator function that specifies the Angular metadata for the component
@Component({
  selector: 'app-heroes',  //The component's CSS element selector
  templateUrl: './heroes.component.html',  //the location of the component's template file
  styleUrls: ['./heroes.component.css'] //the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {
  heroes = Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {   } //identifies it as a HeroService injection site

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  //The 'ngOnInit' is a lifecycle hook. Angular will call 'ngOnInit' after creating a component
  //it is meant for a good place to pyt initialization logic
  ngOnInit(): void {
  }
}
