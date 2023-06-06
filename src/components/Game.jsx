import React, {useState} from "react";
import "./game.css"
import Board from "./Board";
import Square from "./Square";
import Winner from "../Winner";



function Game() {
    const [board,setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = Winner(board)

    return (
        <div className="wrapper">
        <Board squares = {board}/>
        </div>
    );
}

export default Game;

