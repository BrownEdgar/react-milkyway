import axios from 'axios'
import React, { useEffect } from 'react'

export default function App() {
    useEffect(()=>{
      async  function getData() {
   const response=await axios.get("https://jsonplaceholder.typicode.com/users")
   console.log(response);

            
        }
    getData()

    })
  return (
    <div>App</div>
  )
}
