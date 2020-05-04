import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  //defines a heroes array property
  heroes: Hero[] = [];

  //Constructor expects Angular to inject the HeroService into a private heroService property
  constructor(private heroService: HeroService) { }

  //the ngOnInit() returns the sliced list of heroes at positions 1 and 5, returning only four of the Top Heroes
  //(2nd, 3rd, 4th, and 5th)
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
