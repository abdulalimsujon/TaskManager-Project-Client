import axios from "axios";
import { toast } from "react-hot-toast";



export function  RegistrationRequest (email,firstName,lastName,mobile,password,photo){

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

        // if(res.status===200){
        //     if(res.data.data.keyPattern.email===1){
        //         window.alert('mail problem')
        //     }else{
        //         window.alert('something went wrong')
        //     }
        // }

        if(res.data){
            toast.success('registration successfull')
        }

    }).catch((error)=>{

        toast.error('something went wrong');

        return false;

    })

}