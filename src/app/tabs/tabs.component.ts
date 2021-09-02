import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  charcters = [
    {name: 'ABC PQR', side: ''},
    {name: 'XYZ RSt', side: ''},

  ];
  chosenList = 'all';
  constructor() { }

  ngOnInit() {
  }

  getCharacters(){
    if(this.chosenList === 'all'){
      return this.charcters.slice();
    }else{
      let copyCharacters = this.charcters.slice();
      copyCharacters = this.charcters.filter((char) => char.side === this.chosenList);
      return copyCharacters;
    }
   
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
