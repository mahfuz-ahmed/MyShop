import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const{productId}=useParams();
    const[productDet,setProductDet]=useState([]);
    useEffect(()=>{
        const url=`https://dummyjson.com/products/${productId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProductDet(data);
        });
    },[])
    const navigate=useNavigate();
    const evenHandleOnClick=()=>{
        navigate("/shipping");
    }

    return (
        <div className='container mt-5 mb-5'>
            <div className='card p-3'>
            <div className='row'>
                <div className='col-sm-5'>
                    <img style={{height:"300px",width:"380px"}} src={productDet.thumbnail} alt="" />
                    <p className='mt-2'>{productDet.description}</p>
                </div>
                <div className='col-sm-6'>
                    <h4>Product Name: {productDet.title}</h4>
                    <h5>Price: ${productDet.price}</h5>
                    <p>Brand: {productDet.brand}</p>
                    <p>Category: {productDet.category}</p>
                    <p>Stock: {productDet.stock}</p>
                    <p>Rating: {productDet.rating}</p>
                    <Button onClick={evenHandleOnClick} className='mt-2'>Order Now</Button>                   
                </div>               
            </div> 
            </div>         
        </div>
    );
};

export default ProductDetails;