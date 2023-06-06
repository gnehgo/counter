import React from "react";
import "../index.css"
function Counter() {
    const [count,setCount] = React.useState(0);
    const onClickPlus= () =>{
        setCount(count+1);
    }
    const onCliclMinus= () =>{
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setCount(count-1);
    }
    return (
        <div className ={Counter}>
            <div>
                <h2 className="text">Счет</h2>
                <h2 className="value">{count}</h2>
                <button onClick={onCliclMinus} className="minus"><h2>- минус</h2></button>
                <button onClick={onClickPlus} className="plus"><h2>плюс +</h2></button>
            </div>
        </div>
    )
}

export default Counter;

