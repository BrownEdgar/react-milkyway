import React, { memo } from 'react'

function Posts({posts}) {
    return (
        <div>
            {posts.map((elem) => {
                return (
                    <p>
                        {elem.title}
                    </p>
                )
            })}
        </div>
    )
}


export default memo(Posts)