import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  capsHome = [];

  constructor(private dataService: DataService){
    this.dataService.getDataHome().subscribe(data => {
     // console.log(data)
     this.capsHome = data;
    });
  }

  ngOnInit() {
  }

}
