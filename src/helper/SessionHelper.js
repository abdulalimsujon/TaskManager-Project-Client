class SessionHelper {
    setToken(token){
        localStorage.setItem("token",token)
    }

    getToken(){
        return localStorage.getItem('token')
    }
    
    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))

    }

    getUserDetails(){
       return  localStorage.getItem(JSON.parse("UserDetails"))
    }


    removeSession =()=>{
        localStorage.clear()
        window.location.href="/"
    }
    // AxiosHeader(){
    //     return {headers:{"token":getToken()}}
    // }

}


export const {setToken,getToken,setUserDetails,getUserDetails,removeSession} = new SessionHelper();