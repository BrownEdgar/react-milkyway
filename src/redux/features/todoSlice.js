import { ADD_TODO } from "./actionTypes"

const initialTodoValue = []

export function toDOReducer(state = initialTodoValue, action) {
	switch (action.type) {
		case ADD_TODO: return [...state,action.payload.value];



		default: return state
	}


}