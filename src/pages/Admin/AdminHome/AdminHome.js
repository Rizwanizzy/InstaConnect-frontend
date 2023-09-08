import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../action/authentication/logoutAction'
import AdminLogin from '../adminLogin/adminLogin';
import { Navigate } from 'react-router';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home'
import './AdminHome.css'

const AdminHome = ({logout}) => {
    const [isAdminAuthenticated,setIsAdminAuthenticated] =useState( localStorage.getItem('access') !==null)
    const [openSidbarToggle,setOpenSidebarToggle]=useState(false)

    const openSidebar = () =>{
        setOpenSidebarToggle(!openSidbarToggle)
    }
    const [navigate, setNavigate] = useState(false)
    const logout_user = () => {
        logout();
        setNavigate(true)
    }

    useEffect(()=>{
        setIsAdminAuthenticated(localStorage.getItem('access') !== null)
    },[])

    if(navigate){
        return <Navigate to = '/adminlogin'/>
    }

    if (isAdminAuthenticated){
        return (
            <div className='body'>
                <div className="grid-container">
                    <Header openSidebar={openSidebar} />
                    <Sidebar openSidebarToggle={openSidbarToggle} openSidebar={openSidebar} />
                    <Home />
                    {localStorage.getItem('access') ?  <button className='sidebar-list-item' onClick={logout_user}>Logout</button>:null }
                </div>
                
            </div>
            )
    }else{
        return <Navigate to='/adminlogin' />
    }
    
}
const mapDispatchToProps = {
    logout : logout
}

export default connect(null, mapDispatchToProps)(AdminHome)
