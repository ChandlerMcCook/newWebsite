class Tile {
    mineStatus : boolean;
    revealed : boolean;
    touching : number;

    constructor() {
        this.mineStatus = false;
        this.touching = 0;
        this.revealed = false;
    }

    getTouching() {
        return this.touching;
    }

    increaseTouching() {
        this.touching++;
    }

    isMine() {
        return this.mineStatus;
    }

    isRevealed() {
        return this.revealed;
    }
}


export default Tile;