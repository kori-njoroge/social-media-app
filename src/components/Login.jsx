import  './Login.css';



function Login() {


    return (
    <div className="login_container">
    <div className="login_left">
    <h1>beehive</h1>
    <div className='login_header'>
    <h2>Sign in</h2>
    <p>Lorem ipsum dolor sit amet consectetur aellendus.<br></br>
     sunt temporibus non officia corporivoluptate quasi.</p>
     <form className='login_form'>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign in</button>
        <input type="checkbox" id="remember" name="remember" value="remember" />
        <p>Forgot your password?</p>
        <p>Don't have an account? <a href="#">Sign up</a></p>       
     </form>

    </div>
    </div>

    <div className="login_right">
    <div className='login_header_right'>
    <h2>login</h2>
    </div>
    <div className='signup_content'>
   <p> _________ Make Friends</p>
   <h1>Socializing Made Easy</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br></p>
   <button>Sign UP</button>


    </div>
    </div>
    </div>
    );
    }

    export default Login;