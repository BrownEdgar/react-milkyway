import React, {useState, useEffect} from 'react';
import "./Homework2.scss";
const MAIN_URL = process.env.REACT_APP_MAIN_URL;


export default function Homework2() {
    const [data, setdata] = useState([])
    
    useEffect(() => {
      fetch(MAIN_URL)
      .then(response => response.json())
      .then(data => setdata(data.users))
    }, [])

  const handleDelete = (id) => {
    const filteredData = data.filter(user => user.id !== id)
    setdata(filteredData)
  }

  return (
    <div className='container'>
        <div className='users'>
            {data.map(user => {
                return (
                    <div className='users__Item' key={user.id}>
                        <span className='btn_delete' onClick={() => handleDelete(user.id)}>+</span>
                        <img src={user.image} alt={user.firstName} className="users__Image"/>
                        <h2 className='users__Name'>
                            <span>FirstName:</span>{user.firstName} <br />
                            <span>LastName:</span>{user.lastName}
                        </h2>
                        <hr />
                        <p>Age: {user.age}</p>
                        <p>Gender: {user.gender}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
