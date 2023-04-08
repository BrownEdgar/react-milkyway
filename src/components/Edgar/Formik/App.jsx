import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from "yup"

import './App.scss'

const validationSchema = yup.object({
	username: yup
		.string()
		.required()
		.min(3)
		.matches(/[A-Z]/, "username must by contain Uppercase"),
	surname: yup
		.string()
		.required()
		.min(3)
		.matches(/[A-Z]/, "surname must by contain Uppercase"),
	phone: yup
		.number()
		.required(),
	password: yup
		.string()
		.required()
		.min(8)
		.max(18)
		.matches(/\d/, "password must by contain number"),
	repeatpassword: yup.string().oneOf([yup.ref('password')], "Passwords dont match!"),
	email: yup.string().required().email(),
	member: yup.boolean(),
  teacher: yup.boolean(),

})

const initialValues = {
	username: "",
	surname: "",
	email: "",
	phone: "",
	password: "",
	repeatpassword: "",
	languages: "",
	member:false,
	teacher:false,
}

export default function App() {
	const [data, setData] = useState({})
	const handleSubmit = (values, {resetForm}) => {
		setData({ ...values, member: !!values.member, teacher: !!values.teacher })
		resetForm()
	}
	return (
		<div className='App'>
			<div className="state">
				<pre>
					{JSON.stringify(data,null,1)}
				</pre>
			</div>
			<div className="wrraper">
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{({values}) => {
						return (
							<>
							<div className='form-header'>
								<h2>Create account</h2>
								<p>Get started your learning with as</p>
							</div>
								<Form>
									<div className='form-group'>
										<label htmlFor="username">username</label>
										<Field type="text" id="username" name="username" />
										<ErrorMessage name="username" component='p' className='error' />
									</div>
									<div className='form-group'>
										<label htmlFor="surname">Surname</label>
										<Field type="text" id="surname" name="surname" />
										<ErrorMessage name="surname" component='p' className='error' />
									</div>
									<div className='form-group'>
										<label htmlFor="email">Email</label>
										<Field type="text" id="email" name="email" />
										<ErrorMessage name="email" component='p' className='error' />
									</div>
									<div className='form-group'>
										<label htmlFor="phone">phone</label>
										<Field type="text" id="phone" name="phone" />
										<ErrorMessage name="phone" component='p' className='error' />
									</div>
									<div className='form-group'>
										<label htmlFor="password">password</label>
										<Field type="password" id="password" name="password" />
										<ErrorMessage name="password" component='p' className='error' />
									</div>
									<div className='form-group'>
										<label htmlFor="repeatpassword">repeatpassword</label>
										<Field type="password" id="repeatpassword" name="repeatpassword" />
										<ErrorMessage name="repeatpassword" component='p' className='error' />
									</div>
									<div className='form-group form-group_checkbox'>
										<label htmlFor="member">
											<Field type="checkbox" name="member" /> <span>I am a member</span>
										</label>
										<label htmlFor="teacher">
											<Field type="checkbox" name="teacher" /> <span>I am a teacher</span>
										</label>
									</div>
									<div className="form-group form-group_checkbox">
										<p>
											<Field type="checkbox" value="html5" name="languages" />
											<span>html5</span>
											</p>
										<p>
											<Field type="checkbox" value="css3" name="languages" />
											<span>css3</span>
										</p>
										<p>
											<Field type="checkbox" value="javascript" name="languages" />
											<span>javascript</span>
										</p>
										<p>
											<Field type="checkbox" value="react.js" name="languages" />
											<span>react.js</span>
										</p>
										
										
									</div>
									<div className='form-group'>
										<input type="submit" value='create Accaunt' />
									</div>
								</Form>
							</>
						)
					}}

				</Formik>
			</div>

		</div>
	)
}
