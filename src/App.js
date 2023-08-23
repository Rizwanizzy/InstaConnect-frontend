import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {createBrowserHistory} from "history"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Activation from "./pages/Activation/Activation"
import Passwordreset from "./pages/Passwordreset/Passwordreset"
import Passwordresetconfirm from "./pages/Passwordresetconfirm/Passwordresetconfirm"

const App = () => {
  const history=createBrowserHistory()
  return (
    <div>
      <Router>
        <Routes history={history}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/activation" element={<Activation />} />
            <Route path="/passwordreset" element={<Passwordreset />} />
            <Route path="/passwordresetconfirm" element={<Passwordresetconfirm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
