import React from 'react'
import {BsCart3,BsGrid1X2Fill,BsPersonCircle,BsFillArchiveFill,BsFillGrid3X2GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Sidebar = ({openSidebarToggle,openSidebar}) => {
  return (
    <aside id='sidebar' className={openSidebarToggle? "sidebar-responsive":''}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
            <BsPersonCircle className='icon_header' />Admin Panel
        </div>
        <span className='icon close_icon' onClick={openSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
            <Link to="/adminhome">
                <BsGrid1X2Fill className='icon'/>Dashboard
            </Link>     </li>
        <li className='sidebar-list-item'>
            <Link to="/adminusers">
                <BsPeopleFill className='icon'/>Users
            </Link>     </li>
        <li className='sidebar-list-item'>
            <Link to="">
                <BsListCheck className='icon'/>Posts
            </Link>     </li>
        <li className='sidebar-list-item'>
            <Link to="">
                <BsMenuButtonWideFill className='icon'/>Reports
            </Link>     </li>
        <li className='sidebar-list-item'>
            <Link to="">
                <BsFillGearFill className='icon'/>Settings
            </Link>     </li>
      </ul>
    </aside>
  )
}

export default Sidebar
