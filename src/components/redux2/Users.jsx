import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector  } from 'react-redux'


export default function Users() {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users?_limit=2").then(response => dispatch({type: "add-users", payload: {users: response.data}}))
    },[])

    return (
        <div>
            <h2>
                <pre>
                    {JSON.stringify(users,null,1)}
                </pre>
            </h2>
        </div>
    )
}
