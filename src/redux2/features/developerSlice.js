export const initialDeveloperValue = {
    name: "Inga",
    age: 18,
    skills: ["Html5","Css3"]
}

export function developerReducer(state = initialDeveloperValue, action) {
    switch (action.type) {
        case "add-count": return state + 1
    
    
        default: return state;
    }
}
