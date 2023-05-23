export const initialCountValue = 3;

export function countReducer(state = initialCountValue, action) {
    switch (action.type) {
        case "count": return state + Math.trunc(Math.random() * (20 - 1) + 1)
    
    
        default: return state;
    }
}