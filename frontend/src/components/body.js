import React ,{useState,useEffect}from "react";
import "./body.css";
import {Link} from "react-router-dom";
import {Card,Row,Col} from "react-bootstrap";
function Body(){
    const [product,setProduct] = useState([]);
    const fetchData = ()=>{
        fetch('http://localhost:5000/product')
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                setProduct(data)
        })
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log(product);
    return (
        <div className="main-container">
            <Row>
            {product.map(data =>(
                <Col key={data._id} sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' ,height:'500px' }} className='my-3 p-3 rounded'>
                <Link to= {`/product/${data._id}`}>
                <Card.Img variant="top" src={data.image} height={200}/>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                    {data.description}
                    </Card.Text>
                    <h6>${data.price}</h6>
                    {/* <Button variant="primary">Wishlist</Button> */}
                </Card.Body>
                </Link>
                </Card>
            </Col>
            ))}
            </Row>
           
        </div>
    )
}

export default Body;