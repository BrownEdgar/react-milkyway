export const initialDevelopersValue = {
      name: "Michael",
      skills: ['html', 'css', "js"],
      salary: 140_000,
      info(property) {
        return this[property]
      },
      sayName() {
        return this.name
      }
}


export function developersReducer(state = initialDevelopersValue, action) {
  switch (action.type) {
    case "developer": return deleteFunction(state)
    
    
    default: return state;
  }
}

function deleteFunction (state) {
  const copy = {...state}
  for(let k in copy) {
    if(typeof copy[k] === "function") {
      delete copy[k]
    }
  }
  return copy
}
