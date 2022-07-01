import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const navigate=useNavigate();
    const handleOnClick=()=>{
        navigate("/Order");
    }
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-md-6 p-4'>                      
                    <form className='form-control' onSubmit={handleSubmit(onSubmit)}> 
                        <div className='m-4'>
                        <h4>Shipping Order</h4> 
                        <label htmlFor="" >Name</label>    
                        <input className='form-control' placeholder='Name' {...register("name")} />
                        <label htmlFor="">Email</label>    
                        <input className='form-control' placeholder='Email' {...register("email", { required: true })} />
                        {errors.email && <span className='text-danger '>Email is required</span>}
                        <label htmlFor="">Contact</label>    
                        <input className='form-control' placeholder='Contact Number' {...register("contact")} />
                        {errors.contact && <span className='text-danger '>Contact Number is required</span>}
                        <label htmlFor="">City</label>    
                        <input className='form-control' placeholder='City' {...register("city")} />
                        <label htmlFor="">Address</label>    
                        <input className='form-control' placeholder='Address' {...register("address")} />
                        <input onClick={handleOnClick} className='btn btn-danger mt-4 float-right' type="submit" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;