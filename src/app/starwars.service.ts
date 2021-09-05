import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";

@Injectable()
export class StarWarsService{
    private  charcters = [
        {name: 'ABC PQR', side: ''},
        {name: 'XYZ RSt', side: ''},
    
      ];
      private logService: LogService;
      charactersChanged = new Subject<void>();

      constructor(logService: LogService){
        this.logService = logService;
      }

      getCharacters(chosenList){
        if(chosenList === 'all'){
          return this.charcters.slice();
        }else{
          let copyCharacters = this.charcters.slice();
          copyCharacters = this.charcters.filter((char) => char.side === chosenList);
          return copyCharacters;
        }
       
      }

      onSideEmit(char){
        const position = this.charcters.findIndex((x) => {
          return x.name === char.name;
        });
    
        this.charcters[position].side = char.side;
        this.charactersChanged.next();
        this.logService.writeLog(`Change side of ${char.name}, new side: ${char.side}`);
      }

      addCharacter(name, side){
        const position = this.charcters.findIndex((x) => {
          return x.name === name;
        });
        if(position !== -1){
        return;
        }
        const newChar = {name: name, side:side};
        this.charcters.push(newChar);
      }
}