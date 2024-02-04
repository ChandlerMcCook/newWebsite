class Tile {
    mineStatus : boolean;
    touching : number;

    constructor() {
        this.mineStatus = false;
        this.touching = 0;
    }

    calculateTouching() {
        this.touching++;
    }

    getInfo() {
        return this.mineStatus;
    }
}


export default Tile;