import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import { FaUserSecret } from 'react-icons/fa'
import { SlLike } from 'react-icons/sl'
import { AiFillTags, AiOutlineMinusCircle } from 'react-icons/ai'
import { IoMdArrowBack } from 'react-icons/io'


import './Post.scss'

export default function Post() {
	const { id } = useParams();
	const [post, setPost] = useState({})
	const [error, setError] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		axios.get(`http://localhost:4000/posts/${id}`)
			.then(response => setPost(response.data))
			.catch(err => setError(true))
	}, [])
	const handlePostDelete = () => {
		const data = {
			"id": 1221,
			"title": "Lorem ipsum dolor sit amet.",
			"body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas esse, facere vitae iusto recusandae! Illum sint, temporibus optio soluta reiciendis minima numquam illo totam!",
			"userId": 120,
			"tags": [
				"crime",
				"mystery",
				"love"
			],
			"reactions": 1548
		}
		fetch('http://localhost:4000/posts/', {
			method: 'post',
			body:JSON.stringify(data),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			}
		}).then(response => {
			console.log(response)
		})
	}
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

			<button onClick={handlePostDelete} >delete this post <AiOutlineMinusCircle /></button>


		</div>
	)
}
