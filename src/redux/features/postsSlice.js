import { ADD_POSTS } from "./actionTypes"

const initialPostsValue= []

export function postsReducer(state=initialPostsValue,action) {
    switch (action.type) {
        case ADD_POSTS:return action?.payload?.posts || [] 

            
    
        default:  return state 
    }
  
    
}