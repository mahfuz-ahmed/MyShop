import React from 'react';
import './footer.css'

const Footer = () => {
    return (
     <div className='container-fluid bg-dark mt-1'>
            <div className='container'>
            <div className='row'>
                <div className='col-md-3 mt-5 mb-5 text-light'>
                    <h4>GymShop</h4>               
                    <br />
                    <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae expedita laboriosam possimus corporis eligendi aut ipsa mollitia sit esse! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>   
                    <div>
                    <a href="https://www.google.com/"><i className="fa-brands fa-facebook logo"></i></a> 
                    <a href="https://www.google.com/"><i className="fa-brands fa-instagram logo"></i></a> 
                    <a href="https://www.google.com/"><i className="fa-brands fa-linkedin logo"></i></a> 
                    <a href="https://www.google.com/"><i className="fa-brands fa-youtube logo"></i></a>                  

                    </div>           
                </div>
                 <div className='col-md-3 mt-5 mb-5 text-light'>
                    <h4>Our Services</h4>
                    <br />
                    <p>Services</p>
                    <p>Services</p>
                    <p>Services</p>
                    <p>Services</p>
                </div>
                <div className='col-md-3 mt-5 mb-5 text-light'>
                    <h4>Quick Link</h4>
                    <br />
                    <p>Links</p>
                    <p>Links</p>
                    <p>Links</p>
                    <p>Links</p>
                </div>
                <div className='col-md-3 mt-5 mb-5 text-light'>
                    <h4>ShopLocation</h4>
                    <br />
                    TolarBag Mirpur 1, Dhaka Bangladesh.
                    <h3>+8801742162172</h3>
                    <h6>mahfuzkst2@gmail.com</h6>                
                </div>
            </div>
        </div>            
     </div>  
    );
};

export default Footer;