

import React from 'react'
import "./Css/forgotpassword.css";
import logo from "./Images/logo.png";
import check from "./Images/check.png";

export const Forgotpassword = () => {
  return (
    
<div className="ForgotPassword">
        <div className="forgotlogo">
            <img src={logo} alt="" className='image' />
        </div>


        <div class="container p-5 my-5 bg-dark text-white">

           <h1>Email sent!</h1>
            <p>We have sent a reset password email to this mail Id.
                Please click the reset password link to set your new password</p>
            <div className="clicklogo">
            <img src={check} alt="" className='imageel' />
           </div>

         </div>

    </div>

  )
}
