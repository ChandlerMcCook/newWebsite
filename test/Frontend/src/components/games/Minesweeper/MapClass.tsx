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
            // this.options[i] = [];
            for (let j=0; j<width; j++) {
                this.arr[i][j] = new Tile();
                this.options.push([i, j]);
            }
        }

        // Set mines in tiles
        for (let n = 0; n < total; n++) {
            // Randomly generate a choice
            let index = Math.floor(Math.random()*this.options.length);
            let choice = this.options[index];
            let i = choice[0];
            let j = choice[1];

            // Adjust neighboring Tile touching counts
            for (let a=i-1; a<(i+2); a++) {
                if ((a >= 0) && (a < height)) {
                    for (let b=j-1; b<(j+2); b++) {
                        if ((b >= 0) && (b < width)) {
                            this.arr[a][b].increaseTouching();
                        }
                    }
                }
            }


            // Deletes that spot so it's no longer an option
            this.options.splice(index, 1);
            this.arr[i][j].mineStatus = true;
          }
    }

    Reveal(i : number, j : number) {
        this.arr[i][j].revealed = true;
    }

    getTile(id : string) {
        return this.arr[Number(id[0])][Number(id[1])];
    }

    getHeight() {
        return this.arr.length;
    }

    getWidth() {
        return this.arr[0].length;
    }
}


export default TileMap;