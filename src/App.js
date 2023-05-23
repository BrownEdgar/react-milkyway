import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Monster from './redux3/monster/Monster';
import "./App.css"
import { descSorted, reset } from './redux3/monster/monsterSlice';
// import Users from './components/redux2/Users';
// import Posts from './components/redux2/Posts';
// import Todos from './components/redux2/Todos';
// import Comments from './components/redux2/Comments';


export default function App() {
    const state = useSelector(state => state);
    // console.log(state)
    const dispatch = useDispatch()
    const getCompleted = () => {
      dispatch(descSorted(true))
    }
    const getUnCompleted = () => {
      dispatch(descSorted(false))
    }
  return (
    <div>
      <div className='buttons'>
        <button onClick={getCompleted}>Completed First</button>
        <button onClick={getUnCompleted}>Uncompleted First</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <Monster />
        {/* <Users />
        <Posts /> 
        <Todos />
        <Comments /> */}
    </div>
  )
}










// import TodoList from './components/redux2/TodoList';


// export default function App() {
//     const state = useSelector(state => state);
//      console.log(state)
//     const dispatch = useDispatch()
//     const handleClick1 = () => { 
//         dispatch({type: "developer"})
//     }
//     const handleClick2 = () => { 
//         dispatch({type: "brd"})
//     }
//     const handleClick3 = () => { 
//         dispatch({type: "count"})
//     }
//     const handleClick4 = () => { 
//         dispatch({type: "values"})
//     }
//   return (
//     <div>
//         <h1>Count: {state.count}</h1>
//         <h1>Values: {JSON.stringify(state.values)}</h1>
//         <h1>Delete: {JSON.stringify(state.developers)}</h1>
//         <h1>BirthDay: {JSON.stringify(state.brd)}</h1>
//         <button onClick={handleClick1}>Delete function</button>
//         <button onClick={handleClick2}>Brd</button>
//         <button onClick={handleClick3}>Count</button>
//         <button onClick={handleClick4}>Values</button>
//         <TodoList />
//     </div>
//   )
// }
