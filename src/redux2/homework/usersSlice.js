const initialUsersValue = [];

export function UsersReducer(state = initialUsersValue, action) {
    console.log(action);
    switch (action.type) {
    
        case "add-users": return action?.payload?.users || []
    
    
        default: return state;
    }
}
