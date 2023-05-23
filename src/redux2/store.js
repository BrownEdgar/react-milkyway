import { countReducer } from "./features/countSlice"
import { dataReducer } from "./features/dataSlice"
import { developerReducer } from "./features/developerSlice"
import { configureStore } from "@reduxjs/toolkit"
import { postsReducer } from "./features/postsSlice"
 

export default configureStore({
    reducer: {
        count: countReducer,
        data: dataReducer,
        developer: developerReducer,
        posts: postsReducer
    }
})