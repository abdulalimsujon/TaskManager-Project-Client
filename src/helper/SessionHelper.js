class SessionHelper {
    setToken(token){
        localStorage.setItem("token",token)
    }

    getToken(){
        return localStorage.getItem('token')
    }
    
    setEmail(email){
        localStorage.setItem("email",email)
    }

    getEmail(email){
        return localStorage.getItem('email')
    }
    setOTP(OTP){
        localStorage.setItem('OTP',OTP)
    }
    getOTP(){
        return localStorage.getItem("OTP")
    }
    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))

    }

    getUserDetails(){
       return  JSON.parse(localStorage.getItem("UserDetails"))
    }


    removeSession =()=>{
        localStorage.clear()
        window.location.href="/"
    }
    


}


export const {setToken,getToken,setUserDetails,getUserDetails,removeSession} = new SessionHelper();