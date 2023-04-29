import React,{ useEffect, useState} from 'react'
import { useParams,Link } from 'react-router-dom'
import { FaUserSecret } from "react-icons/fa"
import { TfiFaceSmile } from "react-icons/tfi"
import { IoMdArrowRoundBack } from "react-icons/io"
import { MdNavigateNext } from "react-icons/md"
import axios from "axios" 

import "./Post.scss"

export default function () {
    const { id } = useParams()
    const [post,setPost] = useState({})
    const [ error, setError ] = useState(false)
    useEffect(() => {
        axios.get(`https://dummyjson.com/posts/${id}`).then(response => setPost(response.data)).catch(error => setError(true))
      }, [])

      if(error) {
        return (
            <div className="Post">
                <Link to="/posts"><IoMdArrowRoundBack /></Link>
                <h2>Sorry Post N {id} not found</h2>
            </div>
        )
    }

  return (
    <div className='Post'>
        <Link to="/posts"><IoMdArrowRoundBack /></Link>
        <p className='tags'>{post?.tags?.join(" | ")}</p>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p><FaUserSecret /> {post.userId}</p>
        <p><TfiFaceSmile /> {post.reactions}</p>

        <Link to={`/posts/${id+1}`} className='next'> Next Post <MdNavigateNext /></Link>
    </div>
  )
}
