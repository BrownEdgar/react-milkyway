import { createStore } from "redux"
 
const initialState = {
    count: 1,
    data: ["Jin","Yoongi","Hobi","Joon","Jimin","Taehyung","Jungkook"],
    developer: {
        name: "Inga",
        age: 18,
        skills: ["Html5","Css3"]
    }
}

function rootReducer(state,action) {
    switch (action.type){
        case "add-count" : return {...state, count: state.count+1}
        case "change" : return {...state, developer: {...state.developer, age: state.developer.age+1}}

        default:return state
    }
}

const store = createStore(rootReducer,initialState);
export default store;