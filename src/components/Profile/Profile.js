import React, {  useEffect, useRef } from 'react';

import { useSelector } from 'react-redux';
import { getProfileDetails, updateProfile } from '../../APIRequest/APIRequest';
import { getBase64 } from '../../helper/formHelper';


import { useNavigate } from 'react-router-dom';



const Profile = () => {

    let ImageRef,emailRef,firstNameRef,lastNameRef,mobileNumRef  = useRef();
    const navigate = useNavigate()

    const profileData = useSelector((state)=>state.Profile.value)

    console.log(profileData)

    const previewImage = () => {
        let ImgFile =ImageRef.files[0];
        getBase64(ImgFile).then((base64Img)=>{
            ImageRef.src=base64Img;
        })
    }

useEffect(()=>{

    getProfileDetails()

},[])

const updateMyProfile =()=>{

    let email=emailRef.value;
    let firstName=firstNameRef.value;
    let lastName=lastNameRef.value;
    let mobile=mobileNumRef.value;
    let photo=ImageRef.src;

   

    const reqBody = {

        firstName,
        lastName,
        mobile,
        photo

    }

    

    updateProfile(reqBody).then((result)=>{
        if(result===true){
            navigate("/")
        }
    })

    

   
    
    
}

    return (
   <div className='container'>
    <div className="row d-flex justify-content-center">
        <div className="col-md-12">
            <img className='icon-nav-img-lg' src={profileData.photo}></img>
            <hr></hr>

            <div className="row">
             <div className="col-md-4 mt-2">

             <input onChange ={previewImage} ref={(input)=>ImageRef=input}className = "form-control  animated fadeInUp"  type="file"  />

             </div>

             <div className="col-md-4 mt-2">

              <input key={Date.now()} readOnly={true} defaultValue = {profileData.email}ref={(input)=>emailRef=input}className = "form-control  animated fadeInUp"  type="email"  />

             </div>

             <div className="col-md-4 mt-2">

              <input key={Date.now()}  defaultValue = {profileData.firstName}ref={(input)=>firstNameRef=input}className = "form-control  animated fadeInUp"  type="text"  />

             </div>
             <div className="col-md-4 mt-2">

              <input key={Date.now()}  defaultValue = {profileData.lastName}ref={(input)=>lastNameRef=input}className = "form-control  animated fadeInUp"  type="text"  />

             </div>
             <div className="col-md-4 mt-2">

              <input key={Date.now()}  defaultValue = {profileData.mobile}ref={(input)=>mobileNumRef=input}className = "form-control  animated fadeInUp"  type="text"  />

             </div>
             <div className="col-md-4 mt-2">

              <button onClick={updateMyProfile} className='btn btn-primary float-end  animated fadeInUp w-100'>Update</button>

             </div>
         
            

            </div>
            
        </div>

    </div>


       



    </div>
    );
};

export default Profile;