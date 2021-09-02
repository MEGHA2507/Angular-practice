export class StarWarsService{
    private  charcters = [
        {name: 'ABC PQR', side: ''},
        {name: 'XYZ RSt', side: ''},
    
      ];

      getCharacters(chosenList){
        if(chosenList === 'all'){
          return this.charcters.slice();
        }else{
          let copyCharacters = this.charcters.slice();
          copyCharacters = this.charcters.filter((char) => char.side === chosenList);
          return copyCharacters;
        }
       
      }
}