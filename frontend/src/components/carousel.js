import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.css";

import carorsel1 from "../images/carousel3.png";
import carousel2 from "../images/carousel1.gif";
import carousel3 from "../images/carousel2.jpg";
function carousel(){
    return(
        <div className="main-container">
            <Carousel>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carorsel1}
                  alt="First slide"
                  height={400}
                  width="100%"
                />

              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel2}
                  alt="Second slide"
                  height={400}
                  width="100%"
                />


              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={carousel3}
                  alt="Third slide"
                  height={400}
                  width="100%"
                />

            
              </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default carousel;