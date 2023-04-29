import React, { useState, useMemo, useEffect } from 'react'
import Posts from './Posts'

export default function () {
    const [numbersList, setNumbersList] = useState([54,14,87,25,20,19,6])
    const [posts, setPosts] = useState([])
    const [bool, setBool] = useState(false)

    useEffect(() => {
        axios({
            method:"get",
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(response => setPosts(response.data))
    }, [])

    function sorted () {
        console.log("sorted data...")
        return numbersList.sort((a,b) => a - b)
    }
    const memoized = useMemo(sorted, [numbersList])

  return (
    <div>
        {memoized.map((elem, index) => <p key={index}>{elem}</p>)}
        <button onClick={() => setNumbersList([...numbersList, 7])}>toggle</button>

        <Posts posts={posts}/>
    </div>
  )
}



// js i xndir avelacnel tiv miangamic sortavorac texum

// const arr = [7, 77, 777, 7777, 777777]

// function jin (a) {
//     const i = arr.findIndex(elem => elem > a) 
//     arr.splice(i, 0, a)
//     console.log(arr)
// }

// jin(77777)