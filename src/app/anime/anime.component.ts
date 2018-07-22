import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({selector: 'app-anime', templateUrl: './anime.component.html', styleUrls: ['./anime.component.css']})
export class AnimeComponent implements OnInit {

  AnimeList = [];
  AnimeList2 = [];
  
  
  private selectedId : number;
 
  private sub: any;

  constructor(private dataService : DataService, private activeroute : ActivatedRoute, private router : Router, private route : ActivatedRoute) {
    this
      .dataService
      .getDataAnimeList()
      .subscribe(data => {
        this.AnimeList = data;
      });
  }

  ngOnInit() {}

  onShowAnime(id: number){
    this.dataService.showAnimeById(id).subscribe(data => {
      this.AnimeList2 = data;
      
    })
    this.router.navigate(['/Show', id])
  }

  onSelect(animeList) {
    // this.router.navigate(['/Show', animeList.id])
    // this.router.navigateByUrl('/Show')
  }

}
