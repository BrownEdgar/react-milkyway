export const reducer = (state,action) => {
    if(action.type === "add-count") {
        return state + 1
    }
    if(action.type === "minus-count") {
        return state - 1
    }
    return state;
}