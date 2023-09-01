import React, { useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../action/authentication/logoutAction'
import adminLogin from '../adminLogin/adminLogin';
import { Navigate } from 'react-router';

const AdminHome = ({logout}) => {
const [navigate, setNavigate] = useState(false)
const logout_user = () => {
logout();
setNavigate(true)
}
if(navigate){
    return <Navigate to = '/adminLogin'/>
}

return (
<div>
    <h1>Admin home page</h1>
   {localStorage.getItem('access') ?  <button onClick={logout_user}>Logout</button>: <adminLogin/> }
</div>
)
}
const mapDispatchToProps = {
logout : logout
}
export default connect(null, mapDispatchToProps)(AdminHome)
