import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMonster } from "./monsterAPI";


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
		status: ""
	},
	reducers: {

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
					data: action.payload?.users
				}
			})
			.addCase(getAsyncMonster.rejected, () => {
				return {
					status: 'failure',
					data: []
				}
			})
	}

})

export default monsterSlice.reducer



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