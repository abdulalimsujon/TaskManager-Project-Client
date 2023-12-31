import React, { useRef } from 'react';
import { ErrorToast, IsEmpty } from '../../helper/formHelper';
import { RecoverResetPassword } from '../../APIRequest/APIRequest';
import { getEmail, getOTP } from '../../helper/SessionHelper';
import { useNavigate } from 'react-router-dom';

const CreatePassword = () => {

    let  passRef ,confirmPasswordRef = useRef();

    const navigate = useNavigate()

    const setPassword = ()=>{

        const password = passRef.value;
        const confirmPassword = confirmPasswordRef.value;

        
        if(IsEmpty(password)){

            ErrorToast("Password Required")

        }else if(IsEmpty(confirmPassword)){
            ErrorToast("Confirm password required")

        }else if(password !== confirmPassword){
            ErrorToast("Password and confirm password should be same")
        }else{

            const reqBody ={
                email:getEmail(),
                otp:getOTP(),
                password:password
            }


            RecoverResetPassword(reqBody).then((res)=>{

                console.log(res)

                if(res === true){
                    navigate("/")
                }
                
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
                                <h3> Create Password</h3>
                                <hr/>
                                <label>Your Email</label>
                                <input value ={getEmail()} ref = {(input)=>passRef=input } type="email" className='form-control animated fadeInUp'/>
                                <br/>
                                <input ref = {(input)=>passRef=input }placeholder='Enter your password' type="email" className='form-control animated fadeInUp'/>
                                <br/>
                                <input ref = {(input)=>confirmPasswordRef=input }placeholder='confirm your password' type="email" className='form-control animated fadeInUp'/>
                                <br/>
                                <button onClick = {setPassword} className='btn btn-primary animated fadeInUp w-100  float-end'>Next</button>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default CreatePassword;