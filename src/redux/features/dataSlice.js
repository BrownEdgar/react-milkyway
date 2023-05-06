export const initialDataValue = ["Inga", "Monika", "Anahit", "Emil", "Miqayel", "Hayk", "..."]


export function dataReducer(state = initialDataValue, action) {
	switch (action.type) {
		case "": return state 

		default: return state
	}
}