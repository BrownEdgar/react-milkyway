import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchMonster } from "./monsterAPI";

export const getAsyncMonster = createAsyncThunk(
    "monster/async",
    async (url) => {
        const response = await fetchMonster(url);
        return response
    }
)

const monsterSlice = createSlice({
    name: "monster",
    initialState: {
        data: [],
        filtered: [],
        status: ""
    },
    reducers: {
        descSorted: (state, action) => {
            const CompletedMonster = state.data.filter(elem => elem.completed)
            const unCompletedMonster = state.data.filter(elem => !elem.completed);
            const result = []
            if(action.payload) {
                result.push(...CompletedMonster,...unCompletedMonster)
                state.filtered = result
            }else{
                result.push(...unCompletedMonster,...CompletedMonster)
                state.filtered = result
            }
        },
        reset: (state) => {
            state.filtered = state.data
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAsyncMonster.pending, (state) => {
            state.status = "pending";
            return state;
        })
        .addCase(getAsyncMonster.fulfilled, (state,action) => {
            return {
                status : "success",
                data : action.payload,
                filtered : action.payload
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

export const selectMonsters = state => state.monster.filtered

export default monsterSlice.reducer
export const { descSorted, reset } = monsterSlice.actions