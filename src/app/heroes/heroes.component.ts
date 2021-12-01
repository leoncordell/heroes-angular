import { Component, OnInit } from '@angular/core';
import { Hero } from './../hero';
import { HEROESX } from './mock-heros';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  
  //HEROESX ; 
  // atl LEFT  and alt RIGHT  navigate left and right
 

  constructor(private heroService:HeroService){ }

  ngOnInit()  {
    this.getHeroes();
  }

  

  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes= heroes);
  }

  onSelect(hero: Hero){
      console.log("selected " +hero.name);
  }

}
