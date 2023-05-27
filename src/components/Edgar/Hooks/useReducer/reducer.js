import { GET_POSTS, MINUS_COUNT, PLUS_COUNT, RANDOM_ARR, RESET_COUNT } from "./actionTypes"

export const initialState = {
	actions: 0,
	developers: [],
	posts: [],
	arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
}

export const reducer = (state, action) => {

	switch (action.type) {
		case GET_POSTS: return { ...state, posts: action.payload.posts, actions : state.actions + 1};
		default: return state;
	}
}

