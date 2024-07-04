import TileMap from './MapClass'
import Tile from './TileClass'

let board : TileMap = new TileMap(9, 9, 10);

function FloodFill(id: string) {
    let i = Number(id[0]);
    let j = Number(id[1]); 

    let slot = document.getElementById(id);
    if (slot) {    
        slot.style.backgroundColor = "#d1d1e0";
    }

    for (let a=i-1; a<(i+2); a++) {
        if ((a >= 0) && (a < board.getHeight())) {
            for (let b=j-1; b<(j+2); b++) {
                let t = board.getTile(String(a)+String(b));
                if ((b >= 0) && (b < board.getWidth()) && (!t.isRevealed())) {
                    board.Reveal(a,b);
                    MineClick(String(a)+String(b));
                }
            }
        }
    }
}

export default function MineClick(id: string) {
    let slot = document.getElementById(id);
    let t : Tile = board.getTile(id);

    if (slot) {
        const touching = t.getTouching();
        if(t.isMine()) {
            slot.style.backgroundColor = "red";
        } else if (touching === 0){
            FloodFill(id);
        } else {
            slot.style.backgroundColor = "#45db24";
            slot.innerHTML = String(touching);
        }
    }
};