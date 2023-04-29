import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from "yup"

import "./Login.scss"

const validationSchema = yup.object({
    firstname: yup.string().required().min(3).matches(/[A-Z]/, "Must contain uppercase letter"),
    email: yup.string().required().email(),
    message: yup.string().required().min(10),
    lastname: yup.string().required().min(3).matches(/[A-Z]/, "Must contain uppercase letter"),
    webname: yup.string().required().min(5).matches(/\d/, "Must contain number")
})
const initialValues = {
    firstname: "",
    email: "",
    message: "",
    lastname: "",
    webname: ""
}


export default function App () {
    const [data, setData] = useState({})
    const handleSubmit = (values) => {
        setData(values)
    }
    return (
        <div className="login">
            <div className="main">
             <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
             >
                {() => {
                    return (
                        <Form>
                            <h2>Responsive Contact us Form</h2>
                            <div className="form-group">
                                <label htmlFor="firstname">First Name</label>
                                <Field type="text" id="firstname" name="firstname" className="input"  />
                                <ErrorMessage name="firstname" component="p" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name</label>
                                <Field type="text" id="lastname" name="lastname" className="input"  />
                                <ErrorMessage name="lastname" component="p" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <Field type="text" id="email" name="email" className="input"  />
                                <ErrorMessage name="email" component="p" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="webname">Website Name</label>
                                <Field type="text" id="webname" name="webname" className="input"  />
                                <ErrorMessage name="webname" component="p" className="error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Write your message</label>
                                <Field type="text" id="message" name="message" className="input message"   />
                                <ErrorMessage name="message" component="p" className="error" />
                            </div>
                            <div>
                                <input type="submit" value="Submit" className="button"/>
                            </div>
                        </Form>
                    )
                }}
             </Formik>
            </div>
        </div>
    )
}