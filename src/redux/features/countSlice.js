import { ADD_COUNT } from "./actionTypes";

export const initialCountValue = 1;

export function countReducer(state = initialCountValue, action) {
	switch (action.type) {
		case ADD_COUNT: return state + Math.trunc(Math.random() * 20)
	
		default: return state
	}
	
}