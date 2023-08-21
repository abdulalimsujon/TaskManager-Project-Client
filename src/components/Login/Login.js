import React, { Fragment,useRef } from 'react';

import { Link } from 'react-router-dom';

import { hideLoader, showLoader } from '../../redux/stateSlice/setting-slice';
import store from '../../redux/store/store';
import { ErrorToast} from '../../helper/formHelper';
import { setToken, setUserDetails } from '../../helper/SessionHelper';
import axios from 'axios';


const Login = () => {



    let emailRef,passwordRef = useRef()




    const OnLogin=async(req,res)=>{

        try{

            const email = emailRef.value;
            const password = passwordRef.value;
         
           
        store.dispatch(showLoader())
       
        let url = "http://localhost:5000/api/v1/login";
        const PostBody = {email:email,password:password};
    
          const {data} = await axios.post(url,PostBody)
    
          store.dispatch(hideLoader())

          console.log(data)
    
          setToken(data.token)
          setUserDetails(data.data)
    
          if(data.data?.error){
            store.dispatch(hideLoader())
            ErrorToast(data.data.error)
          }else{
            store.dispatch(hideLoader())
            window.location.href="/"
            // navigate("/")
    
          }
    

        }catch(error){
            
            console.log("something went wrong");
        }
            

    }
    
    
    

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90 p-4">

                            <div className="card-body">
                                <h5>Sign In</h5>
                                <br/>
                                <input ref={(input)=>emailRef=input} placeholder='User Email' type='email' className='form-control animated fadeInUp'></input>
                                <br/>
                                <input ref={(input)=>passwordRef=input} placeholder='User Password' type='password' className='form-control animated fadeInUp'></input>
                                <br/>
                                <button onClick={OnLogin} className='btn w-100 animated fadeInUp float-end btn-primary'>Next</button>
                                <br/>
                                <div className="text-center w-100">
                                    <Link className='text-center animated fadeInUp' to="/register">Sign Up</Link>
                                    <br/>
                                    <Link className='text-center animated fadeInUp' to='/SendOTP'>Forget Password</Link>
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