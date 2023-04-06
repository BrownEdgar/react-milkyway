import React, { useState } from 'react'
import Modal from "./Modal"
import "./App.css"

export default function App() {
const [data,setData] = useState(["HTML","CSS","Java Script","React.js","Node.js","Pyton"])
const [data1,setData1] = useState(["HTML","CSS","Java Script","React.js","Node.js","Pyton"])
const [actIndex, setActIndex] = useState(null)
const [isOpen,setIsOpen] = useState(false);
const yoon = () => {
   setData(data1)
}
const jin = () => {
setIsOpen(!isOpen)
}

const setIndex = (index) => {
   setActIndex(index)
}
return (
   <div className='container'>
      <button onClick={yoon} className='reset'>Reset</button>
    {isOpen && (
        <Modal>
           <button onClick={jin}>Cancel</button>
           <button onClick={() => {
            setData(data.filter((_,i) => i !== actIndex))
            jin()
           }}>Delete</button>
        </Modal>
    )}
     {data.map((elem,index)=> {
     return (
     <div key={index} className='item'>
        <p>{elem}</p>
        <button onClick={() => {
            jin()
            setIndex(index)
           }}>Delete</button>
     </div>
     )
     })}
   </div> 
)
}
