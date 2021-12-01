import { Injectable } from '@angular/core';
import { HEROESX } from './heroes/mock-heros';

import {Observable,of} from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService) { }

 listHero: Hero[];

 getHeroes(): Observable<Hero[]>{
   this.ngOnInitc().subscribe(data=>{this.listHero  = data});
   this.messageService.add("config : " + this.msg);
   this.messageService.add(`HeroService: Fetched Heroes`);
   return of(HEROESX);
 }

 msg : string;
// getHeroes(): Observable<Hero[]>{
//      this.messageService.add(`HeroService: Fetched Heroes`)
//      return this.http.get<Hero[]>(this.heroesUrl);
//    }

ngOnInitc(): Observable<any> {          
  return this.httpClient.get<Hero>('http://localhost:8000/test');
}
  

  




 getHero(id : number): Observable<Hero>{
    this.messageService.add(`HeroService: Fetched with id: ${id}`);
    return of (HEROESX.find(hero => hero.id ===id));
 }

 private log(message: string){
   this.messageService.add(`HeroService: ${message}`);
 }

 private heroesUrl = 'api/heroes';

}
