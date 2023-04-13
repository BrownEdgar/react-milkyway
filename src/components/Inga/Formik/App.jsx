import React from "react";
import { useFormik } from "formik"
import *as yup from "yup"
import "./App.scss"

const validationSchema = yup.object({
    username: yup.string().required().min(3).matches(/[A-Z]/, "username must contain uppercase letter"),
    password: yup.string().required().min(7).max(18).matches(/\d/, "must contain number"),
    email: yup.string().email()
})

export default function App () {
const formik = useFormik({
    initialValues : {
        username:"",
        password:"",
        email: ""
    },
    onSubmit:(values) => {
        console.log(values)
    },
    validationSchema,
})


    return (
        <div className="App">
            {
                Object.keys(formik.errors).length > 0  && (
                    <div className="Box">
                      {Object.keys(formik.errors).map(inputName => {
                        return formik.touched[inputName] ? <p className="error">{formik.errors[inputName]}</p> : null
                      })}
                    </div>
                )
            }
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div>
                <div>
                    <label htmlFor="email">username</label>
                    <input type="text" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}