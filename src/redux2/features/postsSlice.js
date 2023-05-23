const initialPostsValue = [];

export function postsReducer(state = initialPostsValue, action) {
    switch (action.type) {
        case "add-posts": return action?.playload?.posts || []
    
    
        default: return state;
    }
}