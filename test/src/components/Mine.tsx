import TileMap from './MapClass'
// import Tile from './TileClass'

let b : TileMap = new TileMap(9, 9, 10);
// let t : Tile = new Tile();

export default function MineClick(id: string) {
    let slot = document.getElementById(id);
    if (slot) {
        if(b.getTileInfo(id)) {
            slot.style.backgroundColor = "red";
        } else {
            slot.style.backgroundColor = "#45db24";
        }
    }
};