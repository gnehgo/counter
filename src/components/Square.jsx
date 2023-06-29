import React from "react";
import style from "./game.module.css"



const Square = (props) => {
    return (
            <button className={style.button} onClick={props.onClick}>{props.value}</button>
    );
}

export default Square;

