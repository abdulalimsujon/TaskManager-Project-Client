import React, { useState } from 'react';
import ReactCodeInput from 'react-code-input';
import { ErrorToast } from '../../helper/formHelper';
import { RecoverVerifyOTPRequest } from '../../APIRequest/APIRequest';
import { getEmail } from '../../helper/SessionHelper';
import { useNavigate } from 'react-router-dom';

const VerifyOTP = () => {


    let [OTP,setOTP] = useState("")
    const navigate = useNavigate()

    const DefaultStyle = {
        fontFamily: "monospace",
        MozAppearance: "textfield",
        margin: "4px",
        paddingLeft: "8px",
        width: "45px",
        borderRadius: '3px',
        height: "45px",
        fontSize: "32px",
        border: '1px solid lightskyblue',
        boxSizing: "border-box",
        color: "black",
        backgroundColor: "white",
        borderColor: "lightgrey"
      }
    

const submitOTP =()=>{

    if(OTP.length=== 6){
        RecoverVerifyOTPRequest(getEmail(),OTP).then((result)=>{ 

        if(result===true){
            navigate("/CreatePassword")
        }


        })

    }else{
        ErrorToast("Please Enter 6 digit code")
    }

}


    

 return (
     

<div className="container">
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90 p-4">
                        <div className="card-body">
                            <div className="container-fluid">
                                <h3>OTP VERIFICATION</h3>
                                <hr/>
                                <ReactCodeInput onChange={(value)=>setOTP(value)}  type='number' inputStyle={DefaultStyle} fields={6} />
                                <button onClick ={submitOTP} className='mt-3 btn btn-primary animated fadeInUp w-100  float-end'>Next</button>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            
            
        
    );
};

export default VerifyOTP;