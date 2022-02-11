import React from "react";
import {Navbar, Nav, Form, FormControl,Container  } from "react-bootstrap"
import logo from "../images/logo.png";
import searchIcon from "../images/search-icon.png";
import profile from "../images/profile.png";
import wishlist from "../images/wishlist.png";
import bag from "../images/bag.png";
import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function header(){
    return(
        <div>
<Navbar bg="white" expand="lg" fixed="top" >
  <Container fluid>
    <Navbar.Brand href="#"><img src={logo} height={50} width={70} alt=""></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <Nav.Link href="#action1">Men</Nav.Link>
        <Nav.Link href="#action1">WOMEN</Nav.Link>
        <Nav.Link href="#action1">KIDS</Nav.Link>
        <Nav.Link href="#action1">HOME & LIVING</Nav.Link>
        <Nav.Link href="#action1">BEAUTY</Nav.Link>
        <Nav.Link href="#action1">STUDIO</Nav.Link>
      </Nav>
      <img src={searchIcon} height={35} width={35}></img>
      <Form className="search-container">

        
        
        <FormControl 
          type="search"
          placeholder="Search for products, brands and more"
          className="me-2"
          aria-label="Search"
        />
        
        <Nav>
            <Nav.Link href="#action1">
                <div className="user-profile">
                <img src={profile} height={20} width={20} alt=""></img>
                <p>Profile</p>
                </div>
                
            </Nav.Link>
            <Nav.Link href="#action1">
                <div className="user-profile">
                <img src={wishlist} height={20} width={20} alt=""></img>
                <p>Wishlist</p>
                </div>
                </Nav.Link>
            <Nav.Link href="#action1">
                <div className="user-profile">
                <img src={bag} height={20} width={20} alt=""></img>
                <p>Bag</p>
                </div>
                </Nav.Link>
        </Nav>

      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>            
        </div>
    )
}
export default header;



























{/* <div className="header-container">
            //logo
            <div>
                <img src={logo} width={70} height={50} alt=""></img>
            </div>

            //menu
            <div className="header-navs">
                <ul>
                    <li>MEN</li>
                    <li>WOMEN</li>
                    <li>KIDS</li>
                    <li>HOME & LIVING</li>
                    <li>BEAUTY</li>
                    <li>STUDIO</li>
                </ul>
            </div>

            //search
            <div className="search-container">
                <img src={searchIcon} height={20} width={20} alt=""></img>
                <input type="search" placeholder="search for products, brands and more"></input>
            </div>

            //user profile
            <div className="user-profile">
                //profile
                <div>
                    <img src={profile} height={20} width={20} alt=""></img>
                    <p>Profile</p>
                </div>

                //wishlist
                <div>
                    <img src={wishlist} height={20} width={20} alt=""></img>
                    <p>Wishlist</p>
                </div>

                //cart
                <div>
                    <img src={bag} height={20} width={20} alt=""></img>
                    <p>Bag</p>
                </div>
            </div>
        </div> */}