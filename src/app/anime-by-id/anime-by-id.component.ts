import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-anime-by-id',
  templateUrl: './anime-by-id.component.html',
  styleUrls: ['./anime-by-id.component.css']
})
export class AnimeByIdComponent implements OnInit {

  AnimeList = [];
  id: number = 5;
  
  constructor(private dataService : DataService,private route: ActivatedRoute) { 
  }

  ngOnInit() {
 
   /*  this.dataService.showAnimeById(this.id).subscribe(data => {
      //console.log(data)
    }) */
  }

}
