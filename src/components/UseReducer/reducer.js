import axios from "axios"
import { ADD_DEVELOPER, CHANGE_ID,  POSTS, RESET_COUNT, SORT } from "./actionTypes"

const arr = []

export const initialState = {
	actions: 0,
	developers: [],
	posts: [],
	arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export const reducer = (state, action) => {
	switch (action.type) {
		case POSTS: return foo3(state, action)
		case ADD_DEVELOPER: return foo1(state)
		case CHANGE_ID: return foo2(state)
		case RESET_COUNT: return { ...state, count: 0 }
		case SORT: return { ...state, arr: state.arr.sort((a, b) => a - b) }, { ...state, actions: state.actions + 1 }


		default: return state
	}
	function foo1(state) {
		state.actions++
		arr.push(action.payload.values.name)
		return { ...state, developers: arr }
	}

	function foo2(state) {
		state.actions++
		const post = []
		for (let i = 0; i < state.arr.length; i++) {
			console.log(state.posts[i]);
			post.push(state.posts[i].id = state.arr[i])
		}
		return { ...state, developers: arr }
	}

	function foo3(state, action) {
		state.actions++
		return { ...state, posts: action.payload.data }
	}





}



