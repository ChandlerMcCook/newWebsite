import './Field.css';
import MineClick from "./Mine";

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];

export default function Field() {
    let board = [];

    for (let i=0; i<horizontalAxis.length; i++) {
        for (let j=0; j<verticalAxis.length; j++) {
            board.push(
                <div className="tile">
                    <button className="mineButton" onClick={MineClick}>{horizontalAxis[i]}{verticalAxis[j]}</button>
                </div>
            );
        }
    }

    return <div id="field">{board}</div>
}

// Spread types may only be created from object types.