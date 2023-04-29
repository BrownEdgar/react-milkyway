
export const initialState = {
    actions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
  }
  


export const reducer = (state,action) => {

  switch (action.type) {
    case "posts":  return {...state, posts: action.playload.posts }
   case "sort": return {...state, arr: state.arr.sort((a,b) => a - b)}
   case "add": return {...state, developers: state.developers.push()}
    
  default: return state
}  
}





