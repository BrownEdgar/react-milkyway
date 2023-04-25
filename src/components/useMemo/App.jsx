import axios from 'axios';
import React, { useState , useMemo, useEffect } from 'react'
import Posts from './Posts';

export default function App() {
    const [numbersList, setNumbersList] = useState([54,14,87,25,20,19,6]);
    const [posts, setPosts] = useState([])
    const [bool,setBool]=useState(false)
    useEffect(() => {
    axios({
        method:"get",
        url:"https://jsonplaceholder.typicode.com/posts"
    }).then(response=>setPosts(response.data))

      
    },[])
    
    function sortedData() {
        console.log("sorted data");
        return numbersList.sort((a,b)=>a-b)
    }
    const memoized=useMemo(sortedData,[numbersList])

  return (
    <div>
       { 
       memoized.map((elem,i)=><p key={i}>{elem}</p>)} 
       <button onClick={()=>setNumbersList([...numbersList,Math.trunc(Math.random()*200)]) }>toggle</button>
        <Posts posts={posts}/>
    </div>

  )
}





// import React from 'react'

// export default function App() {
//     const arr=[12,25,29,60,74,79,120,154,487]

// function foo(number) {
//     const i=arr.findIndex(elem=>elem>number)
//     arr.splice(i,0,number)
//     console.log(arr);
// }
// foo(13)
// foo(67)

//   return (
//     <div>{arr}</div>
//   )
// }


