import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {createBrowserHistory} from "history"
import Home from "./pages/Users/Home/Home";
import Login from "./pages/Users/Login/Login"
import Signup from "./pages/Users/Signup/Signup"
import Activation from "./pages/Users/Activation/Activation"
import Activate from "./pages/Users/Activation/Activate"
import Passwordreset from "./pages/Users/Passwordreset/Passwordreset"
import Passwordresetconfirm from "./pages/Users/Passwordresetconfirm/Passwordresetconfirm"
import { Provider } from "react-redux";
import store from "./store";
import './App.css'
import Create from "./pages/Users/navigation/navigateTo/Create";
import AdminLogin from "./pages/Admin/adminLogin/adminLogin";
import UserProfile from './pages/Users/navigation/navigateTo/UserProfile'
import AdminHome from "./pages/Admin/AdminHome/AdminHome";
import AdminUsers from "./pages/Admin/AdminHome/AdminUsers";

const App = () => {
  const history=createBrowserHistory()
  return (
    <div>
      <Provider store={store}>
        <Router  history={history}>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/userprofile" element={<UserProfile />} />
              <Route path="/create" element={<Create />} />
              <Route path="/adminlogin" element={<AdminLogin />} />
              <Route path="/adminhome" element={<AdminHome />} />
              <Route path="/adminusers" element={<AdminUsers />} />
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
