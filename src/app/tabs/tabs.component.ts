import { Component, OnInit } from '@angular/core';
import { StarWarsService } from 'app/starwars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  charcters = [];
  chosenList = 'all';
  constructor() { }

  ngOnInit() {
  }

  getCharacters(){
   const swService = new StarWarsService();
   this.charcters = swService.getCharacters(this.chosenList);
   return this.charcters;
  }

  onChoose(side){
    this.chosenList = side;
  }

  onSideEmit(char){
    const position = this.charcters.findIndex((x) => {
      return x.name === char.name;
    });

    this.charcters[position].side = char.side;
  }

}
