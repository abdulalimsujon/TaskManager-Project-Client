import React, { useRef } from 'react';
import { ErrorToast, IsEmail } from '../../helper/formHelper';
import { RecoverVerifyEmailRequest } from '../../APIRequest/APIRequest';

const SendOTP = () => {


    let emailRef = useRef()


  const verifyEmail=()=>{
    const email = emailRef.value;

    if(IsEmail(email)){
        ErrorToast("Valid Email is Required")
    }else{

        RecoverVerifyEmailRequest(email).then((res)=>{

        })

    }
  }




    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90 p-4">
                        <div className="card-body">
                            <div className="container-fluid">
                                <h3> Email Address</h3>
                                <hr/>
                                <label>Your Email</label>
                                <input ref={(input)=>emailRef=input}  placeholder='Enter your Email' type="email" className='form-control animated fadeInUp'/>
                                <br/>
                                <button onClick = {verifyEmail} className='btn btn-primary animated fadeInUp w-100  float-end'>Next</button>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default SendOTP;