import React from "react";
import "./body.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from "react-bootstrap";
import reebok from "../images/reebok.jpg";
import adidas from "../images/adidas.jpg";
import nike from "../images/nike.jpg";
import puma from "../images/puma.jpg";
function body(){
    return (
        <div className="main-container">
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={reebok} />
                <Card.Body>
                    <Card.Title>Reebok</Card.Title>
                    <Card.Text>
                    Men running shoes
                    </Card.Text>
                    <h6>Rs. 1899</h6>
                    <Button variant="primary">Wishlist</Button>
                </Card.Body>
                </Card>
            </div>

            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={adidas} />
                <Card.Body>
                    <Card.Title>Adidas</Card.Title>
                    <Card.Text>
                    Men running shoes
                    </Card.Text>
                    <h6>Rs. 2799</h6>
                    <Button variant="primary">Wishlist</Button>
                </Card.Body>
                </Card>
            </div>

            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={nike} />
                <Card.Body>
                    <Card.Title>Nike</Card.Title>
                    <Card.Text>
                    Men running shoes
                    </Card.Text>
                    <h6>Rs. 2999</h6>
                    <Button variant="primary">Wishlist</Button>
                </Card.Body>
                </Card>
            </div>

            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={puma} />
                <Card.Body>
                    <Card.Title>Puma</Card.Title>
                    <Card.Text>
                    Men running shoes
                    </Card.Text>
                    <h6>Rs. 2299</h6>
                    <Button variant="primary">Wishlist</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default body;