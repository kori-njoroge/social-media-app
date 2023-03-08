import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import logo from '../images/logo-icon.svg'
import "../styles/signup.css"
import { useNavigate } from 'react-router-dom'
import apiLink from './apilink'

export default function Signup() {
    const navigate = useNavigate()
    const [linkItems, setItems] = useState([
        "home", "about us", "contact Us", "login"
    ]);
    // const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    const [signUpData, setSIgnUpData] = useState({
        name: "",
        username: "",
        phonenumber: "",
        email: "",
        gender: "",
        country: "",
        password: "",
        conPass: ""
    })
    const [notMatch, setNotMatch] = useState(false);

    function handleformOnchange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        setSIgnUpData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }
    function handleOnfocus() {
        setNotMatch(false)
    }
    function handleSubmit(event) {
        event.preventDefault();
        if (signUpData.password === signUpData.conPass) {
            axios.post(`${apiLink}/users/singup`,
                {
                    fullName: signUpData.name,
                    email: signUpData.email,
                    userName: signUpData.username,
                    phoneNumber: signUpData.phonenumber,
                    country: signUpData.country,
                    gender: signUpData.gender,
                    password: signUpData.password
                }).then(response => {
                    console.log(response)
                    setSIgnUpData(
                        {
                            name: "",
                            username: "",
                            phonenumber: "",
                            email: "",
                            gender: "",
                            country: "",
                            password: "",
                            conPass: ""
                        }
                    )
                    navigate('/dashboard/activity');
                }).catch(err => {
                    console.log(err)
                })
        } else { setNotMatch(true) }

    }
    function testLink() {
        axios.get(`${apiLink}`).then(response => {
            console.log(response.data)
        }).catch(err => {
            console.log(err);
        })
    }

    //reget for email?

    return (
        <div className='singup--page'>
            <div className="singup--nav">
                <img className='logo' src={logo} alt="logo" />
                <div className="singup-links">
                    {linkItems && linkItems.map((item, index) => <Link to={`/${item}`} className='a' key={index}>{item}</Link>)}
                </div>
            </div>
            <div className="signup--content">
                <div className="right">
                    <div className="right--top">
                        <img className='logo' src={logo} alt="brand" />
                        <p>Join gazillions of people</p>
                    </div>
                    <form className='singup--form' onSubmit={handleSubmit}>
                        <div className="formWrapper">

                            <div className="splitform1">
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

                                <label htmlFor="name">User name:</label> <br />
                                <input
                                    type="text"
                                    id="name"
                                    name="username"
                                    value={signUpData.username}
                                    onChange={handleformOnchange}
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
                                    required />
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
                            </div>

                            <div className="formSplitting2">
                                <label htmlFor="name">Gender:</label> <br />
                                <input
                                    type="text"
                                    id="name"
                                    name="gender"
                                    value={signUpData.gender}
                                    onChange={handleformOnchange}
                                    required
                                />
                                <br />

                                <label htmlFor="name">Country:</label> <br />
                                <input
                                    type="text"
                                    id="name"
                                    name="country"
                                    value={signUpData.country}
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
                                    required />
                                <br />
                            </div>
                        </div>

                        <br />
                        {notMatch && <p className='invalid'>Passwords do not match!</p>}
                        <button>Submit</button>
                        <br />
                        {/* <button type='button' onClick={testLink}>Test</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}


