export const initialBrdValue = new Date();

export function brdReducer(state = initialBrdValue, action) {

    switch (action.type) {
        case "brd": return new Date("2005, 3, 17");
    
    
        default: return state;
    }
}