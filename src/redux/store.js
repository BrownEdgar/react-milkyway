import { countReducer } from "./features/countSlice";
import { dataReducer } from "./features/dataSlice";
import { developerReducer } from "./features/developerSlice";
import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./features/postsSlice";
import { todoReducer } from "./features/todoSlice";
import { ADD_TODO } from "./features/actionTypes";


const myFirstMiddleWare = (store) => (next) => (action) => {
	if (action.type === ADD_TODO) {
		const todos = store.getState().todos
		const isExist = todos.includes(action.payload.value)
		if (!isExist) {
			next(action)
		}
	}else{
		next(action)
	}
}



export default configureStore({
	reducer: {
		count: countReducer,
		data: dataReducer,
		developer: developerReducer,
		posts: postsReducer,
		todos: todoReducer
	},
	middleware: [myFirstMiddleWare]
})

