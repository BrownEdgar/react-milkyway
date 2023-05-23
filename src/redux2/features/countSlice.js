export const initialCountValue = 1;

export function countReducer(state = initialCountValue, action) {
    switch (action.type) {
        case "add-count": return state + 1
    
    
        default: return state;
    }
}