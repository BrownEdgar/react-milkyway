import React from 'react'

export default function Pagination({totalPosts,perPage,changePage}) {
    const links = []
    for(let i = 1; i <= Math.ceil(totalPosts/perPage);i++) {
        links.push(i)
    }
  return (
    <div className='Pagination'>
        <ul>
            {links.map((elem,index) => {
                return <li key={index} onClick={() => changePage(elem)}>{elem}</li>
            })}
        </ul>
    </div>
  )
}