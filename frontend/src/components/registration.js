import React,{useState} from "react";
import {Link} from "react-router-dom";
import "./registration.css";
function Registration(){

    const [user,setUser]= useState({
        name:"", email:"", password:""
    })

    let name,value;
    const handleInputs = (e) =>{
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }
    
    return(
        <div>
        <div>
      <div className="upper-container">
        <div className="Heading-container">
          <h2>FLAT 400 OFF !</h2>
          <h2>FREE DELIVERY</h2>
          <p>Doorstep delivery & </p>
          <p>Fast Service</p>
        </div>
        <div className="bottom-container">
          <p>Already Have Account</p>
          <Link to='/signup'><button onClick="">Sign In</button></Link>
        </div>
      </div>

      <div className="register-container">
        <h1>REGISTER</h1>
        <form action="">
          <div className="register-box">
            <div className="left-register">

              <input
                type="text"
                class="inputform "
                placeholder="Name"
                name="name"
                value={user.name}
                onChange={handleInputs}
              />

            <input
                type="email"
                class="inputform "
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={handleInputs}
              />

                <input
                type="password"
                class="inputform "
                placeholder="Password"
                name="pwd"
                value={user.pwd}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="term-condition">
            <input
              type="checkbox"
              class="form-check-input registercheck"
              id="check1"
              name="option1"
              value="something"
            />
            <h4>
              I agree to Terms & Condition receiving marketing and promotional
              materials
            </h4>
          </div>
          <button onClick="">Register</button>
        </form>
      </div>
    </div>

        </div>
    )
}

export default Registration;
