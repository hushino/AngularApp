import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({selector: 'app-anime', templateUrl: './anime.component.html', styleUrls: ['./anime.component.css']})
export class AnimeComponent implements OnInit {

  AnimeList = [];

  constructor(private dataService : DataService) {
    this
      .dataService
      .getDataAnimeList()
      .subscribe(data => {
        console.log(data)
        this.AnimeList = data;
      });
  }

  ngOnInit() {}

}
 