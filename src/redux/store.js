// import { countReducer} from "./features/countSlice";
// import { dataReducer} from "./features/dataSlice";
// import { developerReducer} from "./features/developerSlice";
// import { configureStore } from "@reduxjs/toolkit";
// import { postsReducer } from "./features/postsSlice";
// import { toDOReducer } from "./features/todoSlice";
// import { ADD_TODO } from "./features/actionTypes";
import { configureStore } from "@reduxjs/toolkit";
import monsterSlice from "./features/monster/monsterSlice";



// const myFirstMiddleware = (store) => (next) => (action) => {
// if (action.type === ADD_TODO) {
// 	const todos = store.getState().todos
// 	const isExist = todos.includes(action.payload.value)
// 	if (!isExist) {
// 		next(action)

// 	} 
	
// }else{
// 	next(action)
// }


// }
 
// export default configureStore({
//   reducer: {
//     count: countReducer,
//     data: dataReducer,
//     developer: developerReducer,
//     posts:postsReducer,
// 		todos: toDOReducer,

//   },
// 	middleware: [myFirstMiddleware]
// });

export default configureStore({
	reducer:{
		monster:monsterSlice

	}
})
 