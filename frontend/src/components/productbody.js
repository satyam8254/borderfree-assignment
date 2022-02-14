import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import {Card,Row,Col,Button} from "react-bootstrap";
function Productbody(){
    const {id} = useParams();
    const [pdata,setData] = useState({});
   
    useEffect(()=>{
        const fetchData = ()=>{
            fetch(`http://localhost:5000/product/${id}`)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    console.log(data);
                    setData(data)
            })
        }
        fetchData();
    },[id])

    return(
        <div className="main-container">
        <Row>
            <Col>
            <Card style={{ width: '18rem' ,height:'500px' }} className='my-3 p-3 rounded'>
            <Card.Img variant="top" src={pdata.image} height={200}/>
            <Card.Body>
                <Card.Title>{pdata.title}</Card.Title>
                <Card.Text>
                {pdata.description}
                </Card.Text>
                <h6>${pdata.price}</h6>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
            </Card>
        </Col>
        </Row>
       
    </div>
    )
}

export default Productbody;