import React, { useState } from 'react'

export default function Homework1() {
  const [arr, setArr] = useState([]) 
  const handleClick = (action) => {
    switch (action) {
      case "random":
        let arr1 = []
        for (let i = 0; i < 10; i++) {
            const random = Math.trunc(Math.random()*100)
            arr1.push(random)
        }           
         setArr(arr1)

        break;
      case "odd":
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2 ) {
            setArr(...arr, arr+1)
          }else{
            setArr(...arr, 0)
          }
        }
        break;
      case "":
        
        break;
    
      default:return
    }
  }
  return (
    <div>
      <h1>{JSON.stringify(arr)}</h1>
      <button onClick={() => {handleClick("random")}}>number</button>
      <button onClick={() => {handleClick("odd")}}>change</button>
      <button onClick={() => {handleClick("")}}></button>
    </div>
  )
}
