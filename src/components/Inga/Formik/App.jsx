import React from "react";
import { useFormik } from "formik"
import "./App.scss"

export default function App () {
const formik = useFormik({
    initialValues : {
        username:"",
        password:""
    }
})
console.log(formik)

    return (
        <div className="App">
            <form>
                <div>
                    <label htmlFor="username">username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}