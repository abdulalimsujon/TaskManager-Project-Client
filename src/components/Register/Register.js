import Link from 'antd/es/typography/Link';
import React, {  useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorToast, IsEmail, IsEmpty, IsMobile} from '../../helper/formHelper';
import { Toaster } from 'react-hot-toast';
import { RegistrationRequest } from '../../APIRequest/APIRequest';

const Register = () => {

    let emailRef,firstNameRef,lastNameRef,MobileRef,PasswordRef = useRef();
    let navigate=useNavigate();

    const OnRegistration = async()=>{
        const email = emailRef.value;
        const firstName = firstNameRef.value;
        const lastName = lastNameRef.value;
        const mobile = MobileRef.value;
        const password = PasswordRef.value;
        const photo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAo5JREFUOE991EvoVlUUBfDf33yk+aoUfJSCSWiIFkphJD0Qk8gsGmgQKb4w8ZGog6yECAt1UJmTFDInDRIHiSRIJD5SwhI0DDHKgVBgkopgaFqxZH9y+fvhhcv3nbvPWXvvtdbZHW59uuAePIRH8DDG4BqON96fcAnXmxAdjUX+34n7sRLPYG+9h9ANT2BSJTmAz/ALLrdwWoD57YuXMQ/b8GkjWVf816imF2ZjET7CdlzM/hZgT7yC5ZiO3yqWiu/FkAI7U23+XfHB2FL7V+BqAMPZSHyOVxtgd+N5ZGN4Oo9/8AV24a/qYBC+wjvYE8CBWIsfq81864/5eBSrcBp34AHMxVC8XtV2L26zfi2Hn6yyH6yMPTAZc4rTzj5IsndxDu9VMPwvTncBXNZQNvF+WI3wtamNraL2Y7XnuYrfleowLIBb8SV2V3AANuNj7GsDmDPD8S1GVDx0jMMnCf6Aafijgu1aauKGkinF5YuNwH04HMBjmNoAzIFnS7W0FHVzS/Kk3Rh/Hb4rD7Yw8/1QAHdiI75pZOuNN/AU1uAkYu5RmFFJ3m7sj/Ui6u4AflieaimWYEgOlwFNlfsRe0ysq/gWYu68qT4X4KX4OICzio+0GQMPw8wiOetQ8nNVmCExuhJ+X+DRILZJYacCmMmyHgfxe9noV2wo67QR+gZAWg4lOXsW70esAIab8XVbUsEHZZl2QM1vGRDp7s2yXir+ujUc+tTIyvxbWpVevQ1izkXxWCUXI+MrwDenTf5H2UybiJC7nXkX0Cv4t8AjWMRJdY9jAU60wDoDZh11F2IJduBoiXKhkudaxh6h5oW6mplSN5/mxG59TAUT8HRxOxYxe6r8s6bSkbLSqc60/A9RX4qkRAR+rgAAAABJRU5ErkJggg=="

        if(IsEmail(email)){
            ErrorToast("Valid Email is required !")
        }
        if(IsEmpty(firstName)){
            ErrorToast("Name is Required!") 
        }
         if(IsEmpty(lastName)){
            ErrorToast("Last Name is required")
        }
        if(IsEmpty(password)){
            ErrorToast("Password is Required")
        }
         if(!IsMobile(mobile)){
            ErrorToast("Valid mobile is required")
        }
        try{

            if((!IsEmpty(firstName)) && (!IsEmpty(lastName)) && (!IsEmail(email)) && (IsMobile(mobile))){

                await RegistrationRequest(email,firstName,lastName,mobile,password,photo)
                navigate('/')

            }

            
        }catch(error){
            console.log(error)
        }
     

    }
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

                                    <button className='form-control btn-primary animated fadeInUp' onClick={OnRegistration}>Next</button>

                                  
                                    <div className="text-center w-100">
                                    <Link className='text-center animated fadeInUp' onClick = {()=>{navigate('/')}}>Login</Link>
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
            <Toaster />
        </div>
    );
};

export default Register;