import React from 'react'
import {BsCart3,BsGrid1X2Fill,BsPersonCircle,BsFillArchiveFill,BsFillGrid3X2GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs'

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
            <a href="">
                <BsGrid1X2Fill className='icon'/>Dashboard
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsPeopleFill className='icon'/>Users
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsListCheck className='icon'/>Posts
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsMenuButtonWideFill className='icon'/>Reports
            </a>
        </li>
        <li className='sidebar-list-item'>
            <a href="">
                <BsFillGearFill className='icon'/>Settings
            </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
