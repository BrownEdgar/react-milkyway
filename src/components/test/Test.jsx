import React, { useState, useEffect } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const initialValues = { username: "" }

export default function Test(props) {
	const handleSubmit = (values) => { 
		console.log(values)
	 }
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			<Form>
				<Field type="text" name="username"/>
				<ErrorMessage component={'p'} name="username" />
				<input type="submit" />
			</Form>
		</Formik>
	)
}





