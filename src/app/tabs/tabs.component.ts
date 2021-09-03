import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/starwars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  charcters = [];
  chosenList = 'all';
  swService:StarWarsService;

  constructor(swService: StarWarsService) { 
    this.swService = swService;
  }

  ngOnInit() {
  }

  getCharacters(){
   this.charcters = this.swService.getCharacters(this.chosenList);
   return this.charcters;
  }

  onChoose(side){
    this.chosenList = side;
  }

}
