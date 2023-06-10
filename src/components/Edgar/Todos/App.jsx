import React, { useState, useEffect } from 'react'
import Form from './Form'
import Students from './Students'
import moment from 'moment'

import './App.scss'
import { useLocalStorage } from './hooks/useLocalStorage'

export default function App() {
	const [students, setStudents] = useLocalStorage('students')

	const [editableUserId, setEditableUserId] = useState(null);


	const changeUserId = (userId) => {
		setEditableUserId(userId)
	}

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

	const editHandleSubmit = (e) => {

		e.preventDefault()
		const {
			firstname,
			lastname,
			email,
			languages,
			registeredDate } = e.target
		const currentStudentIndex = students.findIndex(elem => elem.id === editableUserId);
		console.log(registeredDate.value)
		const newStudent = {
			id: editableUserId,
			firstname: firstname.value || students[currentStudentIndex].firstname,
			lastname: lastname.value || students[currentStudentIndex].lastname,
			email: email.value || students[currentStudentIndex].email,
			languages: languages.value || students[currentStudentIndex].languages,
			registeredDate: (registeredDate.value !== '' && moment(registeredDate.value)) || students[currentStudentIndex].registeredDate,
		}

		setStudents(students.with(currentStudentIndex, newStudent))
		setEditableUserId(null)
	}

	return (
		<div className='container'>
			<div className="container-info">

			</div>
			<div className='container-form'>
				<Form onSubmit={handleSubmit} />
			</div>
			<div className='container-students'>
				<Students
					students={students}
					changeUserId={changeUserId}
					editableUserId={editableUserId}
					editHandleSubmit={editHandleSubmit}
				/>
			</div>
		</div>
	)
}
