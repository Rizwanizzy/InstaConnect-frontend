import React from 'react'
import './Sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material'
import profileIcon from '../../../images/Default-Profile-Picture1.png'
// import Create from './navigateTo/Create';
const Sidenav = () => {
  return (
    <div className='sidenav'>
        <span className='sidenav__logo'>Instaconnect</span>
        <div className="sidenav__buttons">
            <Link to='/' className="sidenav__button">
                <HomeIcon />
                <span>Home</span>
            </Link>
            <Link className="sidenav__button">
                <SearchIcon />
                <span>Search</span>
            </Link>
            <Link className="sidenav__button">
                <ExploreIcon />
                <span>Explore</span>
            </Link>
            <Link className="sidenav__button">
                <ChatIcon />
                <span>Messages</span>
            </Link>
            <Link className="sidenav__button">
                <FavoriteIcon />
                <span>Notification</span>
            </Link>
            <Link to='' className="sidenav__button">
                <AddCircleIcon />
                <span>Create</span>
            </Link>
            <Link to='/userprofile' className="sidenav__button">
                <Avatar className='avatar'><img src={profileIcon} alt="" /></Avatar>
                <span>Profile</span>
            </Link>
            
        </div>
        <div className="sidenav__more">
            <Link className="sidenav__button">
                <MenuIcon />
                <span>More</span>
            </Link>
        </div>
    </div>
    
  )
}

export default Sidenav
