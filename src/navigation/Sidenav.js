import React from 'react'
import './Sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material'


const Sidenav = () => {
  return (
    <div className='sidenav'>
        <span className='sidenav__logo'>Instaconnect</span>
        <div className="sidenav__buttons">
            <button className="sidenav__button">
                <HomeIcon />
                <span>Home</span>
            </button>
            <button className="sidenav__button">
                <SearchIcon />
                <span>Search</span>
            </button>
            <button className="sidenav__button">
                <ExploreIcon />
                <span>Explore</span>
            </button>
            <button className="sidenav__button">
                <ChatIcon />
                <span>Messages</span>
            </button>
            <button className="sidenav__button">
                <FavoriteIcon />
                <span>Notification</span>
            </button>
            <button className="sidenav__button">
                <AddCircleIcon />
                <span>Create</span>
            </button>
            <button className="sidenav__button">
                <Avatar className='avatar'><img src="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg" alt="" /></Avatar>
                <span>Profile</span>
            </button>
            
        </div>
        <div className="sidenav__more">
            <button className="sidenav__button">
                <MenuIcon />
                <span>More</span>
            </button>
        </div>
    </div>
    
  )
}

export default Sidenav
