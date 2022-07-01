import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Carosel/carosel.css';
import img from "../image/1.jpg";
import img1 from "../image/2.jpg";
import img3 from "../image/3.jpg";

const Carosel = () => {
    return (
      <Carousel className='carroselStyle '>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Carosel;