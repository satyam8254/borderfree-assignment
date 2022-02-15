import React from "react";
import {Link} from "react-router-dom";
import {Navbar, Nav, Form, FormControl,Container  } from "react-bootstrap"
import logo from "../images/logo.png";
import searchIcon from "../images/search-icon.png";
import wishlist from "../images/wishlist.png";
import bag from "../images/bag.png";
import "./signupheader.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return(
        <div className="header-container">
<Navbar bg="white" expand="lg" fixed="top" >
  <Container fluid>
    <Navbar.Brand href=""><Link to="/"><img src={logo} height={50} width={70} alt=""></img></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <Nav.Link href="#action1">MEN</Nav.Link>
        <Nav.Link href="#action1">WOMEN</Nav.Link>
        <Nav.Link href="#action1">KIDS</Nav.Link>
        <Nav.Link href="#action1">HOME & LIVING</Nav.Link>
        <Nav.Link href="#action1">BEAUTY</Nav.Link>
        <Nav.Link href="#action1">STUDIO</Nav.Link>
      </Nav>
      <img src={searchIcon} height={35} width={35} alt=""></img>
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
export default Header;
