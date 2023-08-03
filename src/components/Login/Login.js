import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90 p-4">

                            <div className="card-body">
                                <h5>Sign In</h5>
                                <br/>
                                <input placeholder='User Email' type='email' className='form-control animated fadeInUp'></input>
                                <br/>
                                <input placeholder='User Password' type='password' className='form-control animated fadeInUp'></input>
                                <br/>
                                <button className='btn w-100 animated fadeInUp float-end btn-primary'>Next</button>
                                <br/>
                                <div className="text-center w-100">
                                    <Link className='text-center animated fadeInUp' to="/register">Sign Up</Link>
                                    <br/>
                                    <Link className='text-center animated fadeInUp' to='/forget'>Forget Password</Link>
                                    <br/>


                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Login;