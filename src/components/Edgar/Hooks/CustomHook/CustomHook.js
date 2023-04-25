import React,{ useState } from 'react'

export default function CustomHook(initialState=[]) {
	const [value, setValue] = useState(initialState)

	const sorted = () => {  
		const sort = value.sort((a,b) => a - b);
		console.log(sort)
		setValue([...sort])
	}
	const add = (n) => { 
		const copy = value.slice();
		const i = copy.findIndex(elem => elem > n);
		(i >= 0) ? copy.splice(i, 0, n) : copy.push(n)
		setValue(copy)
	}
	 const findNumbersCount = (n) => {
		const filtered = value.filter(elem => elem < n);
		console.log(filtered.length);

	 }
	return [value, setValue, { sorted, add, findNumbersCount }]
}
