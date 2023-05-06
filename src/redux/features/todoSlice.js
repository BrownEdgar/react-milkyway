import { ADD_TODO } from "./actionTypes"

export const initialTodoValue = ["todo1", 'todo 2']

export function todoReducer(state = initialTodoValue, action) {
	switch (action.type) {
		case ADD_TODO: return [...state, action.payload.value]

		default: return state
	}

}