import React,{ useState } from 'react'

export default function App () {
    const [url, setUrl] = useState("https://i.pinimg.com/564x/dc/45/c7/dc45c7c4cea333c38a3da562c3e2d97e.jpg ")

    return (
        <div>
            <img src="https://i.pinimg.com/564x/51/e6/21/51e6215487a2954c6aa105cf98095f54.jpg" alt="photo"/>
            <img src={url} alt="photo"/>
        </div>
    )
}