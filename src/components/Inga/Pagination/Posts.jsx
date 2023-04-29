import React from 'react'

export default function Posts({current}) {
  return (
    <div className='Posts'>
        <ul>
            {current.map(post => {return <li key={post.id}>{post.title}</li>})}
        </ul>
    </div>
  )
}
