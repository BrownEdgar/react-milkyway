import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRoute() {
    const [isLogin, setIsLogin] = useState(true)
  return (
    <>
    {isLogin ? <Outlet/> : <Navigate to="/"/>}
    </>
  )
}
