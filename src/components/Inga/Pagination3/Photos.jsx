import React from 'react'

export default function Photos({current}) {
  return (
    <div className='Photos'>
        <ul>
            {current.map(photo => {return <img src={photo.url} alt="" key={photo.id} /> })}
        </ul>
    </div>
  )
}