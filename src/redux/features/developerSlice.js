import { CLEAR_OBJECT } from "./actionTypes"

export const initialDeveloperValue = [
	{
		name: "Michael",
		skills: ['html', 'css', "js"],
		salary: 140_000,
		info(property) {
			return this[property]
		}
	}
]

function deleteFProperty(o) {
	const copy = {...o}
	for (const ley in copy) {
		if (typeof copy[ley] === 'function') {
			delete copy[ley]
		}
	}
	return copy

}

export function developerReducer(state = initialDeveloperValue, action) {
	switch (action.type) {
		case CLEAR_OBJECT: return [deleteFProperty(state[0])]

		default: return state
	}
}

