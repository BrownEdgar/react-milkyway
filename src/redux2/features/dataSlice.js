export const initialDataValue = ["Jin","Yoongi","Hobi","Joon","Jimin","Taehyung","Jungkook"];

export function dataReducer(state = initialDataValue, action) {
    switch (action.type) {
        case "change": return state 
    
    
        default: return state;
    }
}