
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle}=useAuth();
    const navigate =useNavigate();
    const location =useLocation();
    const redirect_uri= location.state?.path || '/home';
    console.log('came from',location.state?.from);

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result=>{         
            navigate(redirect_uri, {replace:true});
        })
    }

    return (
        <div className='container'>                          
                <div className='row justify-content-center p-2'>               
                    <div className='col-md-5'>
                    <h3>Login</h3>
                    <form >
                        <input type="email" placeholder='Enter Email' className='form-control' />
                        <br />
                        <input type="password" placeholder='Enter Password' className='form-control' />
                        <br />
                        <input className='btn btn-primary' type="submit" value="Submit" />                   
                    </form>
                    <p>Are you new youser ! Please Register Here <Link to="/register">Register</Link></p>                   
                    <p>....or....</p>                     
                    <Button onClick={handleGoogleLogin}>Google Sign In</Button>                                  
                    </div>
                </div>                                 
        </div>
    );
};

export default Login;