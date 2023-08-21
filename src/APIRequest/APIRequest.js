import axios from "axios";
import { toast } from "react-hot-toast";
import store from "../redux/store/store";
import { hideLoader, showLoader } from "../redux/stateSlice/setting-slice";
import {  getToken, setEmail, setOTP, setToken, setUserDetails} from "../helper/SessionHelper";
import { ErrorToast, SuccessToast } from "../helper/formHelper";
import { CancelTask, CompleteTask, NewTask, ProgressTask } from "../redux/stateSlice/TaskSlice";
import { setSummary } from "../redux/stateSlice/summary-slice";
import { SetProfile } from "../redux/stateSlice/profileSlice";

const axiosHeader = {headers:{"token":getToken()}}

export function  RegistrationRequest (email,firstName,lastName,mobile,password,photo){

    store.dispatch(showLoader())
    let url = "http://localhost:5000/api/v1/registration";

    const PostBody ={
        "email":email,
        firstName,
        lastName,
        mobile,
        password,
        photo
    }

   axios.post(url,PostBody).then((res)=>{

    store.dispatch(hideLoader())        
          
       if(res.data.error){
        store.dispatch(hideLoader())
        toast.error(res.data.error)

        return false;
       }else{
        store.dispatch(hideLoader())
            toast.success('registration successfull')
                
            return true; 
        }

    }).catch((error)=>{
        store.dispatch(hideLoader())

        toast.error('something went wrong');
  
        return false;

    })

}


//------------------>Listby status------------------------>


export function TaskListByStatus(Status){

    store.dispatch(showLoader())
    
    const axiosHeader = {headers:{"token":getToken()}}
  
    let URL="http://localhost:5000/api/v1/groupByStatus/"+Status;
     axios.get(URL,axiosHeader).then((res)=>{
        // console.log(res.data)
        // console.log(res.data.data[0].status)
        store.dispatch(hideLoader())    
        if(res.data.status==="success"){

            setUserDetails(res.data.data)

            if(res.data.data[0].status==="new"){
           
                store.dispatch(NewTask(res.data.data))
                
            }
            else if(res.data.data[0].status==="completed"){
              
                store.dispatch(CompleteTask(res.data.data))
            }
            else if(res.data.data[0].status==="cancelled"){
             
                store.dispatch(CancelTask(res.data.data))
            }
            else if(res.data.data[0].status==="progress"){
             
               
                store.dispatch(ProgressTask(res.data.data))
            }
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }).catch((err)=>{
        store.dispatch(hideLoader()) 
      
  
    });
}


//--------------->Task Status Count-------------------------------->


export function TaskStatusCount(){


    const axiosHeader = {headers:{"token":getToken()}}
  
    store.dispatch(showLoader())
    

      
    let URL="http://localhost:5000/api/v1/taskStatusCount"

    axios.get(URL,axiosHeader).then((res)=>{

    if(res.data?.error){
        store.dispatch(hideLoader()) 
        ErrorToast(res.data.error)
    }else{
        store.dispatch(setSummary(res.data.data))
        store.dispatch(hideLoader()) 
    }
    })

}

//.........................delete Task----------------->

export function DeleteTask(id){

    const axiosHeader = {headers:{"token":getToken()}}
    store.dispatch(showLoader())
 
    let URL="http://localhost:5000/api/v1/deleteTask/"+id

    return axios.get(URL,axiosHeader).then((res)=>{
        store.dispatch(hideLoader())
      if(res.status === 200){
        SuccessToast("Delete Successful")
        return true
      }else{
        ErrorToast('something went wrong')
        return false 
      }
    }).catch((error)=>{
        ErrorToast('something went wrong')
        store.dispatch(hideLoader())
        return false;

    })
}


// ---------------------update----------------------->

export function UpdateTask(id,status){

    const axiosHeader = {headers:{"token":getToken()}}
    store.dispatch(showLoader())
 
    let URL=`http://localhost:5000/api/v1/updateTaskStatus/${id}/${status}`

    console.log(URL)

    return axios.get(URL,axiosHeader).then((res)=>{
        store.dispatch(hideLoader())
      if(res.status === 200){
        SuccessToast("Updated Successfully")
        return true
      }else{
        ErrorToast('something went wrong')
        return false 
      }
    }).catch((error)=>{
        ErrorToast('something went wrong')
        store.dispatch(hideLoader())
        return false;

    })
}


//---------------login------------------------------->

export function LoginRequest(email,password){
    store.dispatch(showLoader())
    let url = "http://localhost:5000/api/v1/login";
    let PostBody={"email":email,"password":password}
    return axios.post(url,PostBody).then((res)=>{
        store.dispatch(hideLoader())
        if(res.status===200){
            console.log(res)
            setToken(res.token);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success")
            return true;
        }
        else{
            ErrorToast("Invalid Email or Password")
            return  false;
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(hideLoader())
        return false;
    });
}

//------------------>get user details------------------------>


export function getProfileDetails(){
    store.dispatch(showLoader())
    let URL="http://localhost:5000/api/v1/profileDetail";

    axios.get(URL,axiosHeader).then((res)=>{
        store.dispatch(hideLoader())

        if(res.error){

            ErrorToast("Something Went Wrong")
            
        }
        else{
            store.dispatch(hideLoader())

            store.dispatch(SetProfile(res.data['data'][0]))
          
        }
    }).catch((err)=>{
        ErrorToast("Something Went Wrong")
        store.dispatch(hideLoader())
    });
}


///////////////--------------------update profile------------------>

export function updateProfile(reqBody){
    
    store.dispatch(showLoader())
    let url = "http://localhost:5000/api/v1/profileUpdate";
  

  return  axios.post(url,reqBody,axiosHeader).then((res)=>{
        store.dispatch(hideLoader())
        if(res.data?.error){
            ErrorToast(res.data.error)
            return false
        }else{
            store.dispatch(hideLoader())
            SuccessToast('successfully updated')
            return true
        }
    }).catch((error)=>{
        store.dispatch(hideLoader())
        ErrorToast("something went wrong")
    })
}

///----------------------verify email recovery--------------->

export function RecoverVerifyEmailRequest(email){
    store.dispatch(showLoader)

    let url = "http://localhost:5000/api/v1/RecoverVerifyEmail/" + email;

    return axios.get(url).then((res)=>{

        store.dispatch(hideLoader)

        if(res.status===200){

            if(res.data.status==="fail"){
                ErrorToast("No user found")
                return false
            }else{

                setEmail(email)
                SuccessToast("6 digits code send to your email")
                return true;

            }
        
        }else{
            store.dispatch(hideLoader)
            
            ErrorToast("something went wrong")
            return false
        }

    }).catch((error)=>{
        store.dispatch(hideLoader)
        ErrorToast("something went wrong")
    })

}

///////------------------>Recover Verify OTP request-------->

export function RecoverVerifyOTPRequest(email,OTP){
    store.dispatch(showLoader)

    let url = "http://localhost:5000/api/v1/RecoverVerifyOTP/"+email+ "/"+ OTP;

    return axios.get(url).then((res)=>{

        store.dispatch(hideLoader)

        if(res.status===200){
           if(res.data.status==="fail"){
            ErrorToast("No user found");
            return false ;
           }else{
            setOTP(OTP)

            SuccessToast("code verification success")

            return true;
           }
        }else{
            ErrorToast("something went wrong")
        }

    }).catch((error)=>{
        ErrorToast("something went wrong")
    })

}
///////------------------>password change -------->

export function RecoverResetPassword(reqBody){
    store.dispatch(showLoader)

  
    let url = "http://localhost:5000/api/v1/RecoverResetPassword";

    return axios.post(url,reqBody).then((res)=>{

        store.dispatch(hideLoader)

        console.log("dsfhjkdf====>res",res.data)

        if(res.data.status==="success"){

            SuccessToast("successfully change the password")
            return true;

         
        }else{

            return false;

        }

    }).catch((error)=>{
        ErrorToast("something went wrong")
        return false;
    })

}


