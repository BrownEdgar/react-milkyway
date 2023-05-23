import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Posts from "./components/Posts";
import { ADD_COUNT, CLEAR_OBJECT } from "./redux/features/actionTypes";
import TodoList from "./components/TodoList";
import Monster from "./redux/features/monster/Monster";
import { descSorted, todoReset } from "./redux/features/monster/monsterSlice";

function App() {
	const dispatch = useDispatch()

	const getCompleted = () => {
		dispatch(descSorted(true))
	}
	const getUnCompleted = () => {
		dispatch(descSorted(false))
	}

	// const handleClick=()=>{
	//   dispatch({type:ADD_COUNT})
	// }
	// const handleClick2=()=>{
	//   dispatch({type:"change-age"})
	// }
	// const handleClick3 = () => {
	// 	dispatch({ type: CLEAR_OBJECT })
	// }

	return (

		<div className="App">
			{/* <h1>Redux</h1>
      <h2>{state.count}</h2>
      <h2>developer:{JSON.stringify(state.developer)}</h2>


      <button onClick={handleClick}>add Count</button>
      <button onClick={handleClick2}>Change age</button>
			<button onClick={handleClick3}>delete function</button> */}
			{/* <Posts /> */}
			{/* <TodoList/> */}
			<div className="buttons">
				<button onClick={getCompleted} className="button-86">completed first</button>
				<button onClick={getUnCompleted} className="button-86">uncompleted first</button>
				<button className="button-86">completed first</button>
				<button className="button-86" onClick={() => dispatch(todoReset())}>reset</button>
			</div>
			<Monster />
		</div>
	);
}

export default App;
