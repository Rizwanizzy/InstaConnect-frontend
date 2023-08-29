import React, { useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../action/authentication/logoutAction'
import Login from '../Login/Login';
import { Navigate } from 'react-router';

const Home = ({logout}) => {
const [navigate, setNavigate] = useState(false)
const logout_user = () => {
logout();
setNavigate(true)
}
if(navigate){
    return <Navigate to = '/login'/>
}

return (
<div>
   {localStorage.getItem('access') ?  <button onClick={logout_user}>Logout</button>: <Login/> }
</div>
)
}
const mapDispatchToProps = {
logout : logout
}
export default connect(null, mapDispatchToProps)(Home)
