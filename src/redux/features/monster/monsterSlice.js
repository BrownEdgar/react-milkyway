import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMonster } from "./monsterApi";


export const getAsyncMonster = createAsyncThunk(
	"monster/async",
	async (url) => {
		const response = await fetchMonster(url)
		return response
	}
)
const monsterSlice = createSlice({
	name: "monster",
	initialState: {
		data: [],
		filtredTodo: [],
		status: "",
	},
	reducers: {
		descSorted: (state, action) => {
			const completedTodos = state.data.filter(elem => elem.completed)
			const unCompletedTodos = state.data.filter(elem => !elem.completed)
			const result = []
			if (action.payload) {
				result.push(...completedTodos, ...unCompletedTodos)
			} else {
				result.push(...unCompletedTodos, ...completedTodos)
			}
			state.filtredTodo = result

		},
		todoReset: (state) => {
			state.filtredTodo = state.data
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getAsyncMonster.pending, (state) => {
			state.status = "pending";
			return state;
		})
			.addCase(getAsyncMonster.fulfilled, (state, action) => {
				return {
					status: "success",
					data: action.payload,
					filtredTodo: action.payload
				}
			})
			.addCase(getAsyncMonster.rejected, () => {
				return {
					status: "failure",
					data: []
				}
			})
	}
})
export const selectMonsters = state => state.monster.filtredTodo
export default monsterSlice.reducer
export const { descSorted, todoReset } = monsterSlice.actions