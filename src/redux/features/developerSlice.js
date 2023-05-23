import { CLEAR_OBJECT } from "./actionTypes"

const initialDeveloperValue =[
	{
		name: "Michael",
		skills: ['html', 'css', "js"],
	salary: 140_000,
	info(property) {
		return this[property]
	}
		}
	]

	function deleteFunction(o) {
		const copy={...o}
		for (const key in copy) {
			if (typeof copy[key] === "function") {
				delete copy[key]
				
			}
			
		}
		return copy
		
	}

  export function developerReducer(state=initialDeveloperValue,action) {
    switch (action.type) {
			case CLEAR_OBJECT: return [deleteFunction( state[0])]


            
    
        default:  return state 
    }
   
    
  }