import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

import { FaUserSecret } from 'react-icons/fa'
import { SlLike } from 'react-icons/sl'
import { AiFillTags } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'
import { GrLinkNext } from 'react-icons/gr'

import './Post.scss'

export default function Post() {
	const { id } = useParams();
	const [post, setPost] = useState({})
	const [error, setError] = useState(false)

	useEffect(() => {
		axios.get(`https://dummyjson.com/posts/${id}`)
			.then(response => setPost(response.data))
			.catch(err => setError(true))
	}, [])

	if (error) {
		return (
			<div className='Post'>
				<Link to="/posts"> <IoMdArrowBack /></Link>
				<h2>Sorry Post N {id} not found</h2>
			</div>
		)
	}

	return (
		<div className='Post'>
			<Link to="/posts"> <IoMdArrowBack /></Link>
			<p className='tags'> <AiFillTags /> {post?.tags?.join(' | ')}</p>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
			<p><FaUserSecret /> {post.userId}</p>
			<p><SlLike /> {post.reactions}</p>

			<Link to={`/posts/${6}`}>next post <GrLinkNext /></Link>


		</div>
	)
}
