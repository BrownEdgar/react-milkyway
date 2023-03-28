import React,{ useState } from 'react'
import "./App.css"

// export default function App() {
// 	const [arr, setArr] = useState(["R", "E", "A", "C"])
// 	console.log(arr)
// 	const jin = () => {
// 		if (!arr.includes("T")) {
// 			const copy  = [...arr];
// 		    copy.push("T")
// 		    setArr(copy)
// 		}
// //    	setArr([...arr], "T") es toxy verevi 3 roxna miangamic clone enq anum u avelacnum enq	
// 	}
// 	return (
// 		<div>
// 			<h1>{JSON.stringify(arr)}</h1>
// 			<button onClick={jin}>add</button>
// 		</div>
// 	)
// }

export default function App() {
	const [count, setCount] = useState(0)
	// const jin = () => {
	// 	setCount(count + 1)
	// 	}
	// const yoon = () => {
	// 	setCount(count - 1)
	// 	}
	// const hobi = () => {
	// 	setCount(0)
	// 	}

	// return (
	// 	<div>
	// 		<h1>{count}</h1>
	// 		<button onClick={jin}>plus</button>
	// 		<button onClick={jin}>minus</button>
	// 		<button onClick={jin}>clear</button>
	// 		<button onClick={jin}>random</button>
	// 	</div>
	// )

	const [data, setData] = useState({
		name: "React.js",
		year: 2005
	})


	const jin = (action) => {
		switch (action) {
			case "plus": setCount(count + 1); break;
			case "minus": setCount(count - 1); break;
			case "clear": setCount(0); break;
			case "random": 
			const random = Math.trunc(Math.random() * 101);
			setCount(random); break;
			default: return;
		}
	}


	const yoon = () => {
		setData({...data, year: 2004})
	}

		return (
		<div>
			<div>App</div>
			<h1>{JSON.stringify(data)}</h1>
			<h1>{count}</h1>
			<button onClick={() => jin("plus")}>plus</button>
			<button onClick={() => jin("minus")}>minus</button>
			<button onClick={() => jin("clear")}>clear</button>
			<button onClick={() => jin("random")}>random</button>
			<button onClick={ yoon }>change data</button>
		</div>
	)
}
