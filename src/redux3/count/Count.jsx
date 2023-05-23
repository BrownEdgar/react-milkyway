import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Count() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Count: {count}</h1>
        <button >add Count</button>
    </div>
  )
}
