const initialTodosValue = [];

export function TodosReducer(state = initialTodosValue, action) {
    switch (action.type) {
        case "add-todos": return action?.payload?.todos || []

        default: return state;
    }
}