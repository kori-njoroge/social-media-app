import '../styles/login.css';
import React from 'react';
import logo from '../images/logo-icon.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate()
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
          <form className='login_form'>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <div className='pass'>
              <input className="check_box" type="checkbox" id="remember" name="remember" value="remember" />
              <p>Remember</p>
              <p><a href='#'>Forgot your password?</a></p>
            </div>
            <button type="submit" onClick={()=> navigate('/dashboard/activity')} >Sign in</button>
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