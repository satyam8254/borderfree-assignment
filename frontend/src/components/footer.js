import React from "react";
import "./footer.css"
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import Linkedin from '../images/linkedin.svg';

function footer(){
    return(
        <div className='footer-container'>
            <div>
          <h6>ONLINE SHOPPING</h6>
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
          </ul>
      </div>
      <div>
          <h6>USEFUL LINKS</h6>
          <ul>
              <li>FAQ</li>
              <li>T&C</li>
          </ul>
      </div>
      <div>
          <h6>APP ON MOBILE</h6>
      </div>
      <div>
          <h6>CAREER</h6>
          <ul>
              <li>Blogs</li>
              <li>Create</li>
          </ul>
      </div>
      <div>
          <h6>CONTACT</h6>
      </div>
      <div>
          <h6>KEEP IN TOUCH</h6>
          <div className='social-icons'>
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Linkedin} alt="" />
          </div>
      </div>

        </div>

    )
}

export default footer;