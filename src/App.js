import React from "react";
function App() {
  const [count,setCount] = React.useState(0);
  const onClickPlus= () =>{
     setCount(count+1);
  }
  const onCliclMinus= () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    setCount(count-1);
  }
  return (
      <div ClassName={App}>
        <div>
          <h2>Счетсчик:</h2>
          <h1>{count}</h1>
          <button onClick={onCliclMinus} className="minus">- Minus</button>
          <button onClick={onClickPlus} className="Plus">Plus +</button>
        </div>

      </div>
  )
}

export default App;

