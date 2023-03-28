import React, { useState } from 'react'

import "./App.css"

// export default function App() {
// 	const [arr, setArr] = useState(["R", "E", "A", "C"])

// 	const handleClick = () => { 
// 		if (!arr.includes('T')) {
// 			setArr([...arr, "T"])
// 		}
// 	}
// 	return (
// 		<div>
// 			<h1>{JSON.stringify(arr)}</h1>
// 			<button onClick={handleClick}>add</button>
// 		</div>
// 	)
// }


export default function App() {
	const [count, setCount] = useState(0)
	const [data, setdata] = useState({
		name: 'React.js',
		year: 2015
	})

	const handleClick = (action) => { 
      switch (action) {
		case "random":
			const random = Math.trunc(Math.random() * 101);
			setCount(random);
			break
		case "reset": setCount(0); break
		case "minus": setCount(count - 1); break
		case "plus": setCount(count + 1); break
	  
		default: return;
		
	  }
	}

	const changeData = () => {
		setdata({...data, year: 2014})
	}


	return (
		<div>
			<h1>{count}</h1>
			<h1>{JSON.stringify(data)}</h1>
			<button onClick={() => handleClick("random")}>random</button>
			<button onClick={() => handleClick("minus")}>-</button>
			<button onClick={() => handleClick("reset")}>reset</button>
			<button onClick={() => handleClick("plus")}>+</button>
			<button onClick={changeData}>change data</button>

		</div>
	)
}
