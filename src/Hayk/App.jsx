import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"
import "./App.scss"

const validationSchema = yup.object({
	firstname: yup
	.string()
	.required()
	.min(3)
	.max(20)
	.matches(/[A-Z]/, "FirstName must by contain Uperaces"),
	lastname: yup
	.string()
	.required()
	.min(3)
	.max(20)
	.matches(/[A-Z]/, "LastName must by contain Uperaces"),
	emailaddress: yup
	.string()
	.required()
	.email(),
	WebsiteName: yup
	.string()
	.required()
	.min(3)
	.max(20)
	.matches(/[A-Z]/, "WebsiteName must by contain Uperaces"),
	Massage: yup
	.string()
	.required()
	.min()
	.max(300)
})

const initialValues = {
	firstname: "",
	lastname: "",
	emailaddress: "",
	websitename: "",
	massage: ""
}

export default function App() {
	const [data, setData] = useState({})
	const handleSubmit = (values) => { 
		setData(values)
	}
	return (
		<div className='App'>
			<div className="wrraper">
				<Formik 
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={handleSubmit}
				>
					{(values) => {
						return (
							<>	
								<div className="state">
									<pre>
										{JSON.stringify(data, null, 1)}
									</pre>
								</div>
								<div className='form_title'>
									<h1>Responsive Contact us Form</h1>
								</div>
								<Form>
									<div className="form">
										<label htmlFor="firstname">First Name</label>
										<Field type="text" id="firstname" name="firstname" />
										<ErrorMessage name='firstname' component="p" className='error'/>
									</div>

									<div className="form">
										<label htmlFor="lastname">Last Name</label>
										<Field type="text" id="lastname" name="lastname" />
										<ErrorMessage name='lastname' component="p" className='error'/>
									</div>

									<div className="form">
										<label htmlFor="emailaddress">Email Address</label>
										<Field type="email" id="emailaddress" name="emailaddress" />
										<ErrorMessage name='emailaddress' component="p" className='error'/>
									</div>

									<div className="form">
										<label htmlFor="websitename">Website Name</label>
										<Field type="text" id="websitename" name="websitename" />
										<ErrorMessage name='websitename' component="p" className='error'/>
									</div>

									<div className="form">
										<label htmlFor="massage">Write your massage</label>
										<Field type="text" id="massage" name="massage"/>
										<ErrorMessage name='massage' component="p" className='error'/>
									</div>

									<div className="form submit" >
										<input type="submit"  value="SUBMIT"/>
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
