import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"

import './App.scss'

const validationSchema = yup.object({
	username: yup
	.string()
	.required()
	.min(3)
	.matches(/[A-Z]/, "username must by contain Uppercase"),
	password: yup
	.string()
	.required()
	.min(8)
	.max(18)
	.matches(/\d/, "give me a number"),
	email: yup.string().required().email()

})

export default function App() {
	const formik = useFormik({
		initialValues: {
			username:'',
			password:'',
			email: '',
		},
		onSubmit:(values) => {
			console.log(values)
		},
		validationSchema,
	})
	console.log(formik.touched)
	return (
		<div className='App'>
			{
				Object.keys(formik.touched).length > 0 && (
					<div className='errorBox'>
						{Object.keys(formik.touched).map(inputName =>{
							return formik.errors[inputName] 
							? <p className='error'>{formik.errors[inputName]}</p>
							: null
						})}
					</div >
				)
			}
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label htmlFor="username">username</label>
					<input 
						type="text" 
						id="username" 
						name='username'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				<div>
					<label htmlFor="password">password</label>
					<input 
						type="password" 
						id="password" 
						name='password'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>

				</div>
				<div>
					<label htmlFor="email">email</label>
					<input
						type="email"
						id="email"
						name='email'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
				</div>
				<div>
					<input type="submit" />
				</div>
			</form>
		</div>
	)
}
