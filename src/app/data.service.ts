import { AnimeList } from './AnimesList';
import {ShowById} from './ShowById';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { CapsHome } from './CapsHome'
import { map } from 'rxjs/operators';



export class Anime {
  constructor() { }
}
 

@Injectable({
  providedIn: 'root'
})
export class DataService {
    getAnime(id: number | string) {
    return this.http.get<ShowById[]>('http://localhost:8080/RedOver/Show?id='+id)
  }  

  constructor(private http: HttpClient) {
    console.log('service is working!')
   }

   getDataHome(){
     return this.http.get<CapsHome[]>('http://localhost:8080/v1/')
   }

   getDataAnimeList(){
    return this.http.get<AnimeList[]>('http://localhost:8080/v1/animes/')
   }
/* showAnimeById(id:number){
   return this.http.get<ShowById[]>('http://localhost:8080/RedOver/Show?id='+id)
   } */

   showAnimeById(id:number){
   return this.http.get<ShowById[]>('http://localhost:8080/v1/animes/'+id)
   }
}
