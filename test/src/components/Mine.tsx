
export default function MineClick(id: string, mine : boolean) {
    let slot = document.getElementById(id);
    if (slot) {
        if(mine) {
            slot.style.backgroundColor = "red";
        } else {
            slot.style.backgroundColor = "#45db24";
        }
    }
};