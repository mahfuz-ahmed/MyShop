import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductAll from '../ProductAll/ProductAll';

const Product = () => {

    const [product,setProduct]=useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProduct(data.products);                            
            });
    }, []);
    return (
        <div className='container'>
            
             <Row xs={1} md={4} className="g-4,meal-container">
             {
                product.map(myProduct=><ProductAll key={myProduct.id} products={myProduct}></ProductAll>)
             }
            </Row>
        </div>
    );
};

export default Product;