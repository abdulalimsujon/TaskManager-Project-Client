import { Fragment } from "react";
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
import LoginPage from "./pages/LoginPage";



 

function App() {
  return (
    <div className="App">

      <Fragment>
        <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<DashboardPage></DashboardPage>}></Route>
          <Route exact path='/Create' element={<CreatePages></CreatePages>}></Route>
          <Route exact path='/new' element={<Newpage></Newpage>}></Route>
          <Route exact path='/progress' element={<ProgressPage></ProgressPage>}></Route>
          <Route exact path='/complete' element={<CompletePage></CompletePage>}></Route>
          <Route exact path='/cancel' element={<CancelPage></CancelPage>}></Route>
          <Route exact path='/profile' element={<Profile></Profile>}></Route>
          <Route exact path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route exact path='/forget' element={<ForgotPassPage></ForgotPassPage>}></Route>
          <Route exact path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route exact path='*' element={<page404></page404>}></Route>


        </Routes>
        </BrowserRouter>

        <FullScreenLayout></FullScreenLayout>
      </Fragment>
      
    </div>
  );
}

export default App;
