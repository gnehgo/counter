import React, {useState} from "react";
import "./game.css"
import Board from "./Board";
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

    const startNewGame = () =>{
        return(
            <button className="start_btn" onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
        )
    }

    return (
        <div className="wrapper">
            {startNewGame()}
        <Board squares = {board} click={checkClick}/>
            <p className='info'>
                {winner ? 'Победитель ' + winner : "Сейчас ходит " + (xIsNext ? 'X' : 'O')}
            </p>
        </div>
    );
}

export default Game;

