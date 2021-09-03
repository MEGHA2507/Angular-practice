import { Component, Input, OnInit } from '@angular/core';
import { StarWarsService } from 'app/starwars.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // providers:[StarWarsService]
})
export class ItemComponent implements OnInit {
@Input() char;

swService: StarWarsService;

  constructor(swService: StarWarsService) { 
    this.swService = swService;
  }

  ngOnInit() {
  }

  onAssign(side){
    // this.sideAssigned.emit({name: this.char.name, side: side});
    // const swService = new StarWarsService();

    this.swService.onSideEmit({name: this.char.name, side: side});
  }

}
