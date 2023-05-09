import { createSlice, createAsyncThunk, createSelector, createAction, nanoid } from "@reduxjs/toolkit";
import { fetchMonster } from "./monsterAPI";


export const myAction = createAction("myAction", function foo(text) {
	 console.log(text)
	return {
			payload: {
				text,
				id: nanoid(),
				createdAt: new Date().toISOString(),
			},
		}
})

export const getAsyncMonster = createAsyncThunk(
	'monster/async',
	async (url) => {
		const response = await fetchMonster(url);
		return response
	}
)

const monsterSlice = createSlice({
	name: 'monster',
	initialState: {
		data: [],
		filteredTodo: [],
		status: ""
	},
	reducers: {
		descSorted: (state,action) => {
			const completedTodos = state.data.filter(elem => elem.completed)
			const unCompletedTodos = state.data.filter(elem => !elem.completed);
			const result= []
			if (action.payload) {
				result.push(...completedTodos, ...unCompletedTodos)	
			}else{
				result.push(...unCompletedTodos, ...completedTodos)
			}
			state.filteredTodo = result
		},
		todoReset:(state) => {
			state.filteredTodo = state.data
		}

	},
	extraReducers: (builder) => {
		builder
			.addCase(getAsyncMonster.pending, (state) => {
				state.status = "pending";
				return state;
			})
			.addCase(getAsyncMonster.fulfilled, (state, action) => {
				return {
					status: 'success',
					data: action.payload,
					filteredTodo: action.payload,
				}
			})
			.addCase(getAsyncMonster.rejected, () => {
				return {
					status: 'failure',
					data: []
				}
			})
			.addCase(myAction, (state, action) =>{
				console.log(action)
				return {
					data: [],
					filteredTodo: [],
				}
			})
	}

})


export const selectMonsters = state => state.monster.filteredTodo
export const selectCompletedTodos = state => {
	console.log(1111);
	return state.monster.data.filter(elem => elem.completed)
}
export const memoTodos = createSelector(
	selectCompletedTodos,
	(todos) =>  {
		return todos
	}
)


export default monsterSlice.reducer

export const { descSorted, todoReset } = monsterSlice.actions



// extraReducers: {
// 	[getAsyncMonster.pending]: (state, action) => {
// 		return state + action.payload
// 	},
// 		[getAsyncMonster.fulfilled]: (state, action) => {
// 			return state + action.payload
// 		},
// 			[getAsyncMonster.rejected]: (state, action) => {
// 				return state + action.payload
// 			},
    
//   },