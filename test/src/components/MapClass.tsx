import Tile from './TileClass';

class TileMap {
    arr : Tile[][] = [];
    options : number[][] = [];
    
    constructor(height : number, width : number, total : number) {
        this.arr = [];
        this.options = [];

        // Build array of Tiles and Options
        for (let i=0; i<height; i++) {
            this.arr[i] = [];
            this.options[i] = [];
            for (let j=0; j<width; j++) {
                this.arr[i][j] = new Tile();
                this.options.push([i, j]);
            }
        }

        // Set mines in tiles
        for (var n = 0; n < total; n++) {
            var index = Math.floor(Math.random()*this.options.length);
            var choice = this.options[index];
            var i = choice[0];
            var j = choice[1];
            // Deletes that spot so it's no longer an option
            this.options.splice(index, 1);
            this.arr[i][j].mineStatus = true;
          }
    }

    getTileInfo(id : string) {
        return this.arr[Number(id[0])][Number(id[1])].getInfo();
    }
}


export default TileMap;