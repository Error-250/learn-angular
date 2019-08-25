import { Component, OnInit } from '@angular/core';
import {Hero} from "../../domain/Hero";
import {HEROS} from "../../service/mock-hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = HEROS;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

}
