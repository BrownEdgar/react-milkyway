// import React, { useState } from 'react'
// import "./App.css"
// // export default function App() {
// // 	const [arr,setArr] = useState(["R","E","A","C"])

// // 	const handleClick = () => {
// // 		if (!arr.includes("T")) {
// // 			setArr([...arr,"T"])
// // 		}
// // 	}

	
// export default function App() {
// 	const [count,setCount] = useState(0)
// 	const [data,setData] = useState({
// 		name:"react.js",
// 		year:2015
// 	})

// 	const changeData = () => {
// 		setData({...data,year:2014})
// 	}

// 	const handleClick = (action) => {
// 		switch(action){
// 			case "random": 
// 			const random = Math.trunc(Math.random() * 101);
// 			setCount(count + random);break;
// 			case "reset": setCount(0); break;
// 			case "-": setCount(count - 1); break;
// 			case "+": setCount(count + 1); break;
// 			default: return;
// 		}
// 	}
	

// 	return (
// 		<div>
// 			<h1>{count}</h1>
// 			<h1>{JSON.stringify(data)}</h1>
// 			<button onClick={() => handleClick("random")}>random</button>
// 			<button onClick={() => handleClick("-")}>-</button>
// 			<button onClick={() => handleClick("reset")}>reset</button>
// 			<button onClick={() => handleClick("+")}>+</button>
// 			<button onClick={changeData}>change Data</button>
// 		</div>
// 	)
// }

import React , {useState} from "react"


export default function App() {
	const [url,setUrl] = useState("https://images.unsplash.com/photo-1679913155425-e14172174fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")


return (
	<div>
		<img src={url} alt="!" />
		</div>

)        
}
