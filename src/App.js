
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newpage from "./pages/Newpage";
import CompletePage from "./pages/CompletePage";
import CancelPage from "./pages/CancelPage";
import Profile from "./components/Profile/Profile";
import CreatePages from "./pages/CreatePages";
import FullScreenLayout from "./components/masterLayout/FullScreenLayout";
import DashboardPage from "./pages/DashboardPage";
import ForgotPassPage from "./pages/ForgotPassPage";
import RegisterPage from "./pages/RegisterPage";
import ProgressPage from "./pages/ProgressPage";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import NotFound from "./components/NotFound";
import { getToken } from "./helper/SessionHelper";
import SendOTPpage from "./pages/SendOTPpage";
import VerifyOTPpage from "./pages/VerifyOTPpage";
import CreatePasswordPage from "./pages/CreatePasswordPage";


function App() {

  if(getToken()){

    return (

      <div className="App">
          <Toaster />     
          <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<DashboardPage></DashboardPage>}></Route>
            <Route exact path='/Create' element={<CreatePages></CreatePages>}></Route>
            <Route exact path='/new' element={<Newpage></Newpage>}></Route>
            <Route exact path='/progress' element={<ProgressPage></ProgressPage>}></Route>
            <Route exact path='/complete' element={<CompletePage></CompletePage>}></Route>
            <Route exact path='/cancel' element={<CancelPage></CancelPage>}></Route>
            <Route exact path='/profile' element={<Profile></Profile>}></Route>
            <Route exact path='/forget' element={<ForgotPassPage></ForgotPassPage>}></Route>
            <Route exact  path='/SendOTP' element={<SendOTPpage></SendOTPpage>}></Route>
            <Route exact  path='/VerifyOTP' element={<VerifyOTPpage></VerifyOTPpage>}></Route>    
            <Route exact path='/register' element={<RegisterPage></RegisterPage>}></Route>
            <Route exact path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
      
          </BrowserRouter>
  
          <FullScreenLayout></FullScreenLayout>
          
        
        
      </div>
    );

  }else{

    return (

      <div className="App">
          <Toaster />     
          <BrowserRouter>
          <Routes>
         <Route exact  path='/' element={<LoginPage></LoginPage>}></Route>
      
         <Route exact  path='/CreatePassword' element={<CreatePasswordPage></CreatePasswordPage>}></Route>
        <Route exact path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route exact path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
      
          </BrowserRouter>
  
          <FullScreenLayout></FullScreenLayout>
                
      </div>
    );



  }
  
  




 }



export default App;
