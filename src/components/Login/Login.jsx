import React from 'react'
import "./Login.scss";

export default function Login() {
  return (
    <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input type="text" />
            <label>Username</label>

          </div>
          <div class="user-box">
            <input type="password" />
            <label>Password</label>


          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          <a href="/" id="back">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Back
          </a>

        </form>
      </div>
  )
}
