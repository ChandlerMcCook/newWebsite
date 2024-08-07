import './Field.css';
import MineClick from './Click';
import Flag from './Flag';

const verticalAxis = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalAxis = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
// const minePicture = require("../assets/images/piggity.png")

export default function Field() {
    let board = [];

    for (let i=0; i<horizontalAxis.length; i++) {
        for (let j=0; j<verticalAxis.length; j++) {
            board.push(
                <div className="spot">
                    <button type = "button"
                            title="mine"
                            id={horizontalAxis[i]+verticalAxis[j]} 
                            className="mineButton" 
                            onClick={e => MineClick(e.currentTarget.id)}
                            onContextMenu={e=>{
                                e.preventDefault()
                                Flag(e.currentTarget.id)
                            }}>
                    </button>
                </div>
            );
        }
    }

    return <div id="field">{board}</div>
}
