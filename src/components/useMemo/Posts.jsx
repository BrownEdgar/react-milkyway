import React,{memo} from 'react'

  function Posts({posts}) {
  return (
    <div>
        {posts.map(el=>{
            return <p key={el.id}>{el.title}</p>
        })}     
    </div>
  )
}
export default memo(Posts)
