
import React, { Components } from 'react';
import "./Css/login.css";
import logo from "../Components/Images/logo.png";
import Google from "../Components/Images/Google.png";

export const Login = () => {
  let url="";
  return (
    <div className="Login">
        
          <div className="loginlogo">
            <img src={logo} alt="" className='image' />
          </div>
      

        <div className="form">

              <div className="loginusername">
                <label for="email" className="form-label"></label>
                <input type="email" className="form-control" id="email" placeholder="username" name="email"/>
              </div>


              <div className="loginmailid">
                <label for="pwd" className="form-label"></label>
                <input type="password" className="form-control" id="pwd" placeholder="password" name="pswd"/>
              </div>

        </div>


              <div className="loginsigninbuttons">
                 <button type="button" className="btn btn-dark" active>signin</button>
                 <button type="button" className="btn btn-dark" active>signup</button>
              </div>

              

              <div className="loginforgotpass">
                   <a href="">forgot password?</a>
              </div>

              <div className="loginpara">
                   <p>OR</p>
              </div>

            <a href={url} className="logingooglesign">
                 <img src={Google} alt="#" className="google" />
                 <span>Sign In With Google</span>
            </a>







    </div>
  )
}
