import React,{ useState,useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Navigate,useNavigate } from 'react-router'
import AdminLogin from '../adminLogin/adminLogin';
import './AdminUsers.css'
import { logout } from '../../../action/authentication/logoutAction';
import { Button } from '@mui/material';
import {connect} from 'react-redux'

const AdminUsers = ({logout}) => {
    const [isAdminAuthenticated,setIsAdminAuthenticated] =useState( localStorage.getItem('access') !==null)
    const data = [
        { name: "Anom"},
        { name: "Megha"},
        { name: "Subham"},
    ]
    const [navigate, setNavigate] = useState(false)
    const logout_user = () => {
        logout()
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
                    <Header/>
                    <Sidebar />
                    <main className='main-container'>
                        <div className="main-title">
                            <h3>USER DETAILS</h3>
                        </div>
                        <div className="App">
                            <table>
                                <tr>
                                    <th>Users</th>
                                    <th>Action</th>
                                </tr>
                                {data.map((val, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{val.name}</td>
                                            <td><Button variant="contained" color="error">
                                                    Block
                                                </Button></td>
                                            
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                        
                    </main>
                    {localStorage.getItem('access') ? <button className='sidebar-list-item' onClick={logout_user}>Logout</button>: null }
                   
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

export default connect(null,mapDispatchToProps)(AdminUsers)
