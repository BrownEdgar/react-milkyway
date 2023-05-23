const initialPostsValue = [];

export function PostsReducer(state = initialPostsValue, action) {
    switch (action.type) {
        case "add-posts": return action?.payload?.posts 
    
        default: return state;
    }
}