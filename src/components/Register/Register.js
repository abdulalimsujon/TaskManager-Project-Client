import Link from 'antd/es/typography/Link';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    let emailRef,firstNameRef,lastNameRef,MobileRef,PasswordRef = useRef();
    let navigate=useNavigate();
    return (
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-md-7 col-lg-6 center-screen">

                    <div className="card animated fadeIn w-100">

                        <div className="card-body">
                            <h4 className='text-center'>Sign Up</h4>

                            <hr/>

                            <div className="container-fluid m-0 p-0">
                                <div className="row m-0 p-0">
                                    
                                    <label>Email Address</label>
                                    <input ref={(input)=>emailRef=input} className='form-control animated fadeInUp' type="email"></input>
                                    
                                    
                                    <label>First Name</label>
                                    <input ref={(input)=>firstNameRef=input} className="form-control animated fadeInUp" type="text"></input>
                                    <hr/>
                                    <label>Last Name</label>
                                    <input ref={(input)=>lastNameRef = input} className="form-control animated fadeInUp" type="text"></input>
                                    <hr/>
                                    <label>Mobile Number</label>
                                    <input ref={(input)=>MobileRef=input} className="form-control animated fadeInUp" type="text"></input>
                                    <hr/>
                                    <label>Password</label>
                                    <input ref={(input)=>PasswordRef=input} className="form-control animated fadeInUp" type="password"></input>
                                    <hr/>

                                  
                                    <div className="text-center w-100">
                                    <Link className='text-center animated fadeInUp' onClick = {()=>{navigate('/login')}}>Login</Link>
                                    <br/>
                                    <Link className='text-center animated fadeInUp' onClick={()=>{navigate('/forget')}}>Forget Password</Link>
                                    <br/>


                                </div>
                                   

                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Register;