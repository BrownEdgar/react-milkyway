import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({ 
	name:"React.js",
	year:2015
  })
  

  const handleClick = (action) => {
    switch (action) {
      case "random":
        const random = Math.trunc(Math.random() * 101);
        setCount(count + random);
        break;
      case "reset":
        setCount(0);
        break;
      case "minus":
        setCount(count - 1);
        break;
      case "plus":
        setCount(count + 1);
        break;
      default:
        return;
    }
  };
  const changeData=()=>{
	setData({...data ,year:data.year+1,id:1})
  }
  return (
    <div>
      <h1>{count}</h1>
      <h2>{JSON.stringify(data)}</h2>
      <button onClick={() => handleClick("minus")}>-</button>
      <button onClick={() => handleClick("plus")}>+</button>
      <button onClick={() => handleClick("reset")}>Reset</button>
      <button onClick={() => handleClick("random")}>Random</button>
      <button onClick={changeData}>Random</button>
	  
    </div>
  );
}
