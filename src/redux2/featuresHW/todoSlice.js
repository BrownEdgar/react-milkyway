const initialTodoValue = ["ToDo1", "Todo2"];

export default function todoReducer(state = initialTodoValue , action) {
    switch (action.type) {
        case "todo": return [...state, action.payload.value] 
    
    
        default: return state;
    }
}