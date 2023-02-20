import React from "react"
import  '../styles/user-profile.css';
import  '../styles/view-profile.css';


const ViewProfile = () => {
    return(
        <diV className="view_profile">
        <h3>View Profile</h3>
        <h6>base</h6>

        <table>
            <tr>
                <td>Name</td>
                <td>John Doe</td>
            </tr>
            <tr>
                <td>Date of Birth</td>
                <td>2000-01-08</td>
            </tr>
            <tr>
               <td>sex</td>
                <td>female</td>
            </tr>
            <tr>
               <td>country</td>
                <td>Kenya</td>
            </tr>

         
        </table>
        </diV>

    )
}
export default ViewProfile;