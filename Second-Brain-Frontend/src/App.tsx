import { Dashboard } from "./pages/dashbord";
import { Shared } from "./pages/share";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import {BrowserRouter,Routes,Route } from "react-router-dom";



function App(){
 return <div>
  <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/share/:sharedhash" element={<Shared/>}></Route>


      </Routes>
  </BrowserRouter>
 </div> 
}

export default App;