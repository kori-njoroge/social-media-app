import React, { useState } from 'react'
import logo from '../images/logo-icon.svg'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [linkItems, setItems] = useState([
        "Home", "Login", "About Us", "Contact"
    ]);

    const[signUpData, setSIgnUpData] = useState({
        name : "",
        phonenumber: "",
        email: "",
        password: "",
        conPass:""
    })
    const[notMatch, setNotMatch] = useState(false);
    function handleformOnchange(event){
        event.preventDefault();
        const{name, value} = event.target;
        setSIgnUpData(prevState =>{
            return {...prevState,
            [name]: value}
        });
    }
    function handleOnfocus(){
        setNotMatch(false)
    }
    function handleSubmit(event){
        event.preventDefault();
        if(signUpData.password === signUpData.conPass){
            console.log(signUpData);
            setSIgnUpData(
                {
                name : "",
                phonenumber: "",
                email: "",
                password: "",
                conPass:""
            }
            ) 
        }else{ setNotMatch(true)}
        
    }




    return (
        <div className='singup--page'>
            <div className="singup--nav">
                <img className='logo' src={logo} alt="logo" />
                <Link className='a'>Login</Link>
            </div>
            <div className="signup--content">
                <div className="left">left</div>
                <div className="right">
                    <div className="right--top">
                    <img className='logo' src={logo} alt="brand" />
                    <p>Join gazillions of people</p>
                    </div>
                    <form className='singup--form' onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name:</label> <br />
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={signUpData.name}
                        onChange={handleformOnchange}
                        placeholder="John Doe"
                        required
                        />
                        <br />

                        <label htmlFor="number">Phone Number:</label> <br />
                        <input 
                        type="tel" 
                        id="number" 
                        name="phonenumber" 
                        value={signUpData.phonenumber}
                        onChange={handleformOnchange}
                        placeholder="+254700000000"
                        required/>
                        <br />

                        <label htmlFor="email">Email:</label> <br />
                        <input
                        type="email" 
                        id="email" 
                        name="email"
                        value={signUpData.email} 
                        placeholder="johndoe@gmail.com"
                        onChange={handleformOnchange}
                        required
                        />
                        <br />

                        <label htmlFor="password">Password:</label> <br />
                        <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={signUpData.password}
                        onChange={handleformOnchange}
                        onFocus={handleOnfocus}
                        required
                        />
                        <br />
                        <label htmlFor="conpassword">Confirm Password:</label> <br />
                        <input 
                        type="password" 
                        id="conpassword" 
                        name="conPass"
                        value={signUpData.conPass} 
                        onChange={handleformOnchange}
                        onFocus={handleOnfocus}
                        required/> 
                        <br />
                        <br />
                        {notMatch && <p className='invalid'>Passwords do not match!</p>}
                        <button>Submit</button>
                    </form>
                </div>
            </div>
            <div className="singup-links">
                {linkItems && linkItems.map((item, index) => <Link className='a' key={index}>{item}</Link>)}
            </div>
        </div>
    )
}


