import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Newpage from "./components/new/Newpage";
import ProgressPage from "./components/progess/ProgressPage";
import ForgetPass from "./pages/ForgetPass";
import CompletePage from "./pages/CompletePage";
import CancelPage from "./pages/CancelPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreatePages from "./pages/CreatePages";

 

function App() {
  return (
    <div className="App">

      <Fragment>
        <BrowserRouter>
        <Routes>

          <Route exact path='/' element={<Dashboard></Dashboard>}></Route>
          <Route exact path='/Create' element={<CreatePages></CreatePages>}></Route>
          <Route exact path='/all' element={<Newpage></Newpage>}></Route>
          <Route exact path='/progress' element={<ProgressPage></ProgressPage>}></Route>
          <Route exact path='/complete' element={<CompletePage></CompletePage>}></Route>
          <Route exact path='/cancelPage' element={CancelPage}></Route>
          <Route exact path='/profile' element={<Profile></Profile>}></Route>
          <Route exact path='/registration' element={<Register></Register>}></Route>
          <Route exact path='/' element={<ForgetPass></ForgetPass>}></Route>


        </Routes>
        </BrowserRouter>
      </Fragment>
      
    </div>
  );
}

export default App;
