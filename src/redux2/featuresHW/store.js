import { countReducer } from "./countSlice"
import { valuesReducer } from "./valuesSlice"
import { developersReducer } from "./developersSlice"
import { brdReducer } from "./brdSlice"
import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoSlice"


const myFirstMiddleWare = (store) => (next) => (action) => {
    if(action.type === "todo"){    
        const todos = store.getState().todos
        const isExist = todos.includes(action.payload.value)
        if(!isExist){
            console.log(555555555555);
            next(action)
        }
    }else{
        next(action)
    }
}

export default configureStore({
    reducer: {
        count: countReducer,
        values: valuesReducer,
        developers: developersReducer,
        brd: brdReducer,
        todos: todoReducer
    },
    middleware: [myFirstMiddleWare]
})