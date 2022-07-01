import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./productall.css";

const ProductAll = (props) => {
    const{id,title,description,price,thumbnail}=props.products;
    
    let navigate=useNavigate();
    const handleDetails=()=>{
      navigate(`/products/${id}`);
    }
    return (
    <div>
    <Col className='mt-2 styleCol'>
      <Card>
        <Card.Img className='img' variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{title.slice(0,20)}</Card.Title>
          <Card.Text>
              ${price}
          </Card.Text>
          <Card.Text>
           {description.slice(0,50)+"..."}
          </Card.Text>                   
           <Button onClick={handleDetails}>Details</Button>
        </Card.Body>          
      </Card>
    </Col>
    </div>
    );
};

export default ProductAll;