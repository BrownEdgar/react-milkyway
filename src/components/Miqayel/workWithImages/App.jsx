import React, { useState } from 'react'

export default function App() {
    const [url, setUrl] = useState('https://plus.unsplash.com/premium_photo-1674068280420-7359253f4318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')
  return (
    <div>
        <img src={url} alt="" />
    </div>
  )
}
