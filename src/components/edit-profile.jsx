import React from "react";
import  '../styles/edit-profile.css';
import "../styles/signup.css"


const editProfile = () => {
    return(
        <diV className="edit_profile">
         <form className='singup--form' >
                        <label htmlFor="name">Full Name:</label> <br />
                        <input
                        />
                        <br />

                        <label htmlFor="number">Phone Number:</label> <br />
                        <input
                            />
                        <br />

                        <label htmlFor="email">Email:</label> <br />
                        <input
                     
                        />
                        <br />

                        <label htmlFor="password">Password:</label> <br />
                        <input
                        
                            required
                        />
                        <br />
                        <label htmlFor="conpassword">Confirm Password:</label> <br />
                        <input
                            required />
                        <br />
                        <br />
                        <button>Submit</button>
                        <br />
                        
                    </form>
        </diV>

    )
}
export default editProfile;