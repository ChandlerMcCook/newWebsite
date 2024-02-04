import Map from './MapClass'

let board : Map = new Map(9, 9, 10);

export default function MineClick(id: string) {
    let slot = document.getElementById(id);
    if (slot) {
        if(board.getTileInfo(id)) {
            slot.style.backgroundColor = "red";
        } else {
            slot.style.backgroundColor = "#45db24";
        }
    }
};