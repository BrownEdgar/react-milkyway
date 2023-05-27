import { ADD_COUNT } from "./actionTypes"

  const initialCountValue=3

export function countReducer(state=initialCountValue,action) {
    switch (action.type) {
        case ADD_COUNT:return state+ Math.trunc(Math.random()*20)

            
    
        default:  return state 
    }
  
    
}