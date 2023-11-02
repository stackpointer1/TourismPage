import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import Loader from '../Loader/Loader';
import ErrorMsg from './ErrorrMsg';
import './loginForm.css'

function LoginForm({setLoggedIn,setRegisterClicked}) {
  const [login, setLogin] = useState({ email: { error: '', value: '' }, passWord: { error: '', value: '' } });
  const [loading, setLoading] = useState(false)
  function handleChange( event, type ) {
    const { value } = event.target
    if (type === 'email') {
      const error = !validate(type, value); // Assuming validate(type, value) returns the validation error message
      setLogin({ ...login, email: { value, error } });
      // setLogin({ ...login, email: { ...login.email, value, error: validate(type, value) })
    } else if (type === 'password') {
      const error = !validate(type, value); // Assuming validate(type, value) returns the validation error message
      setLogin({ ...login, passWord: { value, error } });
    }
  }

  function handleLogin() {
    for (let key in login) {
      console.log("key",key);
      const field = login[key];
     let isValid = validate(key, field?.value);
     console.log("valid", isValid);
      setLoading(true)
      localStorage.setItem(key, field?.value)
      setLoggedIn(true)
      setRegisterClicked(false)
      setTimeout(()=>setLoading(false), 1000)
    }

  }


  function validate( type, value ) {
    let isValid = true;
    switch (type) {
      case 'email':

        const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        isValid = value !== "" && emailRegex.test(value);
        break;
      case 'password':
        const passRegex = /^.{8,}$/
        isValid = value !== "" && passRegex.test(value);
        break;
      default:
        break;
    }
    return isValid;
  }


  return createPortal(
    <>
      {loading && <Loader/>}
      <div className="login-container">
        <div className="login-content"><h2>Member Login</h2>
          <div className="member-login">
            <div className="member-group">
              <input
                className="input-controls"
                type="text"
                id="email"
                placeholder="Enter User Name"
                value={login?.email?.value}
                onChange={( e ) => handleChange(e, "email")}
              />
              <label className='floating-label' htmlFor='email'>Email</label>
              {login?.email?.error && <ErrorMsg msg={'invalid Email'}/>}
            </div>
            <div
              className="member-group">
              <input
                className="input-controls"
                type="password" minLength="4"
                maxLength="20"
                id="password"
                placeholder="Enter Password"
                value={login?.passWord?.value}
                onChange={( e ) => handleChange(e, 'password')}
              />
              <label className='floating-label' htmlFor='password'>Password</label>
              {login?.passWord?.error && <ErrorMsg msg={'8 input is required'}/>}
            </div>
            <div className="member-grop-btn">
              <button
                type={'button'}
                className="login-btn"
                onClick={handleLogin}
                disabled={!!login.email?.error || !!login.passWord?.error}
              > Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>, document.body
  )
}

export default LoginForm
