import { useState, useEffect } from 'react';

export default function CustomFetchApi(url, options) {
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchUrl = options?.limit ? `${url}?_limit=${options?.limit}` : url
		fetch(fetchUrl)
			.then(response => response.json())
			.then(json => setData(json))
	}, [options.limit, url])

	return { data }
}
