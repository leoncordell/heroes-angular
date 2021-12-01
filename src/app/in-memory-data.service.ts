import { Injectable } from '@angular/core';
import {InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from './hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
      const heroes =[
                  {id:11 , name:'Mr Nice'},
          {id:12 , name:'Mr Iceman'},
          {id:13 , name:'Mr Axeman'},
          {id:14 , name:'Skater'},
          {id:15 , name:'Joker'},
          {id:16 , name:'Batman'},
          {id:17 , name:'Super man'},
          {id:18 , name:'Riddler'},
          {id:19 , name:'Penguin'},
          {id:20 , name:'Cat Woman'}
          ];
      return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
