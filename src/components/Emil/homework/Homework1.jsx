import React, { useState } from 'react'

export default function Homework1() {
    const [arr,setArr]=useState([])
    const handleClick=(action)=>{
        switch (action) {
            case "random":
                let random=[]
                for (let i = 0; i <10 ; i++) {
                  random.push( Math.trunc(Math.random()*101));

                }
                setArr(random)  

                
                break;
            case "odd":
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i]%2==0) {
                        setArr([...arr, arr[i]=1])
                    }
                    else {
                        setArr([...arr,arr[i]=0])

                    }
                    
                }
                
                break;
            case "":
                
                break;
        
            default:return;
                
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
