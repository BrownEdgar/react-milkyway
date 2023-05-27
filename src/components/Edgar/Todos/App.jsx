import React, { useState, useEffect } from 'react'
import Form from './Form'
import Students from './Students'
import moment from 'moment'

import './App.scss'
import { useLocalStorage } from './hooks/useLocalStorage'

export default function App() {
  const [students, setStudents] = useLocalStorage('students')
  console.log('students:', students);
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      languages } = e.target;

    const student = {
      id: Date.now(),
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      languages: languages.value,
      registeredDate: moment()
    }
    const result = [...students, student];
    localStorage.setItem('students', JSON.stringify(result))
    setStudents(result)


    e.target.reset()
  }



  return (
    <div className='container'>
      <div className="container-info">

      </div>
      <div className='container-form'>
        <Form onSubmit={handleSubmit} />
      </div>
      <div className='container-students'>
        <Students students={students} />
      </div>
    </div>
  )
}
