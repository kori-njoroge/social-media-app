import  './Login.css';
import React from 'react';
import logo from '../images/logo-icon.svg';



function Login() {


    return (
    <div className="login_container">
    <div className="login_left">
      <div className="logo_div">
     <img src={logo}/> 
    <h1>beehive</h1>
      </div>
    <div className='login_header'>
    <img src={logo}/> 
    <h2>Sign in</h2>
    <p>Lorem ipsum dolor sit amet consectetur aellendus.<br></br>
     sunt temporibus non officia corporivoluptate quasi.</p>
     <form className='login_form'>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
       
        <div className='pass'>
        <input  className="check_box"type="checkbox" id="remember" name="remember" value="remember" />
        <p>Remember</p>
        <p><a href='#'>Forgot your password?</a></p>
        </div>

        <button type="submit">Sign in</button>
        <p>Don't have an account? <a href="#">Sign up</a></p>       
     </form>

    </div>
    </div>

    <div className="login_right">
    {/* <div className='login_header_right'>
    <h2>login</h2>
    </div>
    <div className='signup_content'>
   <p> _________ Make Friends</p>
   <h1>Socializing Made Easy</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br></p>
   <button>Sign UP</button>


    </div> */}
    </div>
    </div>
    );
    }
