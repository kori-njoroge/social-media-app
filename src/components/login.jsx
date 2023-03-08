import '../styles/login.css';
import React, { useState } from 'react';
import logo from '../images/logo-icon.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiLink from './apilink';


function Login() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState(
    {
      email: '',
      password: ''
    }
  )
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the data", loginData);
    axios.post(`${apiLink}/users/login`).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err);
    })


    // if( email === 'admin' && password === 'admin') {
    //   navigate('/dashboard/activity')
    // }
    // else {
    //   alert('Invalid Credentials')
    // }
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