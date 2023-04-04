import React, { useState } from 'react'


function foo() {
	const arr = [];
	for (let i = 0; arr.length < 10; i++) {
		const random = Math.trunc(Math.random() * 100)
		arr.push(random)
	}
	return arr
}
function foo2(arr) {
	const copy = arr.map(elem => elem % 2 === 0 ? elem + 1 : 1)

	return copy
}
export default function Homework1() {
    const [arr,setArr]=useState([])
    const handleClick=(action)=>{
			switch (action) {
				case "random": setArr(foo()); break;
				case "odd": setArr(foo2(arr)); break;
					default:
						break;
				}

    }
  return (
    <div><h1>{JSON.stringify(arr)}</h1> 
    <img src="" alt="" />
    <button onClick={()=>{handleClick("random")}}>random</button>
    <button onClick={()=>{handleClick("odd")}}>aaa</button>
    <button onClick={()=>{handleClick("")}}></button>
    </div>
  )
}
