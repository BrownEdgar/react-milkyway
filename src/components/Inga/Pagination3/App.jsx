import React, { useState , useEffect} from 'react'
import axios from "axios";
import Photos from "./Photos"
import Pagination from "./Pagination"
import "./App.scss"


export default function App() {
    const [photos,setPhotos] = useState([])
    const [page,setPage] = useState(1)
    const [perPage,setPerPage] = useState(10)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos").then(response => setPhotos(response.data))
    }, [])


    const up = page * perPage
    const down = up - perPage
    const current = photos.slice(down,up)
    const next = () => setPage(prev => prev + 1)
    const prev = () => setPage(prev => prev + 1)


    const changePage = (pagecount) => {
        setPage(pagecount)
    }


  return (
    <div className="App">
        <Photos current={current}/>
        <Pagination totalPosts={photos.length} perPage={perPage} changePage={changePage} />
        <button onClik={prev}>Prev</button>
        <button onClik={next}>Next</button>
    </div>
  )
}
