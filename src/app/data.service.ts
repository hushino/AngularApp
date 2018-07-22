import { AnimeList } from './AnimesList';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CapsHome } from './CapsHome'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    console.log('service is working!')
   }

   getDataHome(){
     return this.http.get<CapsHome[]>('http://localhost:8080/RedOver/')
   }

   getDataAnimeList(){
    return this.http.get<AnimeList[]>('http://localhost:8080/RedOver/Anime')
   }

   showAnimeById(id:number){
   return this.http.get('http://localhost:8080/RedOver/Show?id='+id)
   }
}
