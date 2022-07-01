import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='container'>
        <div className=''>               
            <div className='row justify-content-center p-2'>               
                <div className='col-md-5'>
                <h3>Register</h3>
                <form onSubmit="">
                <input type="email" placeholder='Enter Email' className='form-control' />
                <br />
                <input type="password" placeholder='Enter Password' className='form-control' />
                <br />
                <input type="password" placeholder='ReEnter Password' className='form-control' />
                <br />
                <input className='btn btn-primary' type="submit" value="Submit" />                   
            </form>
            <br />
            <p>Already Have an account ? <Link to="/login">Login</Link></p>  
            <Button>Google Sign In</Button>         
            </div>           
            </div>           
        </div>         
    </div>
    );
};

export default Register;