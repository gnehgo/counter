import React from "react";
import Square from "./Square";
import style from "./game.module.css"




const Board =({squares,click}) => {
    return (
        <div className={style.board}>
            {
                squares.map((square,i) =>(
                    <Square key={i} value={square} onClick={() =>click(i)}/>
                ))
            }
        </div>
    );
}

export default Board;

