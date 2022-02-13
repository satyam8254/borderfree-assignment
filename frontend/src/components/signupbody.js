import React from "react";
import "./signupbody.css"
import {useNavigate} from "react-router-dom";
function Body(){
  const navigate = useNavigate();
  navigate('/register')
    return(
        <div>
    <div className="home-middle">
      <div className='middle-left'>
        <div className='big-logo'>
            <h1>FLAT 400 OFF !</h1>
            <h1>FREE DELIVERY</h1>
        </div>
        <p>Doorstep delivery & Fast Service</p>
        <div className='register-div'>
            <h4>Don't have an account?</h4>
            <button onClick={navigate}>Register</button>
        </div>
      </div>

      <div className='sign-in'>
        <h2>SIGN IN</h2>
        <div className='input-field'>
        <form method='POST' id="signin-form">
        <input
                type="text"
                id="phone"
                placeholder="Mobile/Email"
                name="email"
        />
        <input
                type="password"
                id="pwd"
                placeholder="Password"
                name="password"
        />
      
        <a href="https://" id='forgot' className="forgot">Forgot Password?</a>
        <button onClick="">Sign In</button>
        </form>
        </div>
      </div>
    </div>


        </div>
    )
}

export default Body;