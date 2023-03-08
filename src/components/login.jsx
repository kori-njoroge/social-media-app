import '../styles/login.css';
import React, { useState } from 'react';
import logo from '../images/logo-icon.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiLink from './apilink';


function Login() {
  const navigate = useNavigate()
  const [message, setMessage] = useState('');
  const [loginData, setLoginData] = useState(
    {
      email: '',
      password: ''
    }
  )

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the data", loginData);
    if (loginData.email.trim() || loginData.password.trim()) {
      axios.post(`${apiLink}/users/login`, {
        email: loginData.email,
        password: loginData.password
      }).then(result => {
        const { message } = result.data
        console.log(result.data.message)
        setMessage(message)
        if (message === 'Login successful') {
          setTimeout(() => {
            navigate('/dashboard/activity')
          }, 1000);
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  function handleOnChange(event) {
    const { name, value } = event.target
    setLoginData(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  }



  return (
    <div className="login_container">
      <div className="login_left">
        <div className="logo_div">
          <img src={logo} />
          <h1>beehive</h1>
        </div>
        <div className='login_header'>
          <img src={logo} />
          <h2>Sign in</h2>
          <p>Lorem ipsum dolor sit amet consectetur aellendus.<br></br>
            sunt temporibus non officia corporivoluptate quasi.</p>
          <p className='invalid'>{message && message}</p>
          <form className='login_form' onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              name='email'
              value={loginData.email}
              onChange={handleOnChange}
            />
            <input
              type="password"
              placeholder="Password"
              name='password'
              value={loginData.password}
              onChange={handleOnChange} />

            <div className='pass'>
              <input
                className="check_box"
                type="checkbox"
                id="remember"
                name="remember"
                value="remember" />
              <p>Remember</p>
              <p><a href='#'>Forgot your password?</a></p>
            </div>
            <button type="submit" onClick={handleSubmit} >Sign in</button>
            <p>Don't have an account? < Link to={'/signup'}>Sign up</Link></p>
          </form>

        </div>
      </div>

      <div className="login_right">
        <div className='login_header_right'>

        </div>
      </div>
    </div>
  );
}
export default Login;