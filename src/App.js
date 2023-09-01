import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {createBrowserHistory} from "history"
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Activation from "./pages/Activation/Activation"
import Activate from "./pages/Activation/Activate"
import Passwordreset from "./pages/Passwordreset/Passwordreset"
import Passwordresetconfirm from "./pages/Passwordresetconfirm/Passwordresetconfirm"
import { Provider } from "react-redux";
import store from "./store";
import './App.css'
import AdminLogin from "./pages/adminLogin/adminLogin";

const App = () => {
  const history=createBrowserHistory()
  return (
    <div>
      <Provider store={store}>
        <Router  history={history}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/activate" element={<Activate />} />
              <Route path="/activate/:uid/:token" element={<Activation />} />
              <Route path="/passwordreset" element={<Passwordreset />} />
              <Route path="/passwordresetconfirm" element={<Passwordresetconfirm />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
