import React , { useState, useEffect}from 'react'
import "./App.css"
import axios from 'axios'
import Photos from "./Photos"

export default function App() {
  const [images,setImages] = useState([])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(response => setImages(response.data))
  }, [])


  return (
    <div>
      <Photos data={ images }/>
    </div>
  )
}
