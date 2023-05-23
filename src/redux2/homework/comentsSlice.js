const initialCommentsValue = [];

export function CommentsReducer(state = initialCommentsValue, action) {
    switch (action.type) {
        case "add-comments": return action?.payload?.comments || []
    
        default: return state;
    }
}