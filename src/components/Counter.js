import React from "react";
import styles from "../counter.module.css"
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
        <div className ={styles.body}>
            <div>
                <h2 className={styles.text}>Счет</h2>
                <h2 className={styles.value}>{count}</h2>
                     <button onClick={onCliclMinus} className={styles.minus}><h2>-</h2></button>
                    <button onClick={onClickPlus} className={styles.plus}><h2>+</h2></button>
            </div>
        </div>
    )
}

export default Counter;

