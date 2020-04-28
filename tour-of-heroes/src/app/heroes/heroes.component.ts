import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // selectedHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id=${hero.id}`)
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) { return; }
    this.heroService.addHero({ name: heroName } as Hero)
        .subscribe(hero => { this.heroes.push(hero); });
    // console.log('add')
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(heroes => heroes !== hero);
    this.heroService.deleteHero(hero)
        .subscribe();
  }

}
