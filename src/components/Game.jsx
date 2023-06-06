import React, {useState} from "react";
import "./game.css"
import Board from "./Board";
import Square from "./Square";
import Winner from "../Winner";



const Game = () => {
    const [board,setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = Winner(board)

    const checkClick = (index) =>{
        const boardCopy = [...board]
        if(winner || boardCopy[index])return null
        boardCopy[index]= xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    return (
        <div className="wrapper">
        <Board squares = {board} click={checkClick}/>
        </div>
    );
}

export default Game;

