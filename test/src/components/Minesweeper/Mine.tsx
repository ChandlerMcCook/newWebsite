import TileMap from './MapClass'
import Tile from './TileClass'

let board : TileMap = new TileMap(9, 9, 10);

function FloodFill(id: string) {
    let i = Number(id[0]);
    let j = Number(id[1]); 

    for (let a=i-1; a<(i+2); a++) {
        if ((a > 0) && (a <= board.getHeight())) {
            for (let b=j-1; b<(j+2); b++) {
                if ((b > 0) && (b <= board.getWidth())) {
                }
            }
        }
    }
}

export default function MineClick(id: string) {
    let slot = document.getElementById(id);
    let t : Tile = board.getTile(id);

    if (slot) {
        if(t.isMine()) {
            slot.style.backgroundColor = "red";
        } else {
            if (t.getTouching() === 0) {
                FloodFill(id);
            }
            slot.style.backgroundColor = "#45db24";
            slot.innerHTML = String(t.getTouching());
        }
    }
};