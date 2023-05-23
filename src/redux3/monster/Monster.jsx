import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAsyncMonster, selectMonsters } from './monsterSlice';
import classNames from 'classnames';

export default function Monster() {
    const monster = useSelector(selectMonsters);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAsyncMonster("https://jsonplaceholder.typicode.com/todos"))
    },[])
  return (
    <div className='flex'>
        {
          monster.map(elem => {
            return <div>
              <span className={classNames({completed: elem.completed})}></span>
              <h3 key={elem.id}>{elem.title}</h3>
            </div>
          })
        }
    </div>
  )
}