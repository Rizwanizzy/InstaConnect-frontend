import React, { useEffect } from 'react'
import Sidenav from '../Sidenav'
import getPhotoUrl from 'get-photo-url'
import './UserProfile.css'
import profileIcon from '../../images/Default-Profile-Picture1.png'
import Gallery from './Gallery'
import { useState } from 'react'
import { fetchUserData } from '../../action/userSide/userProfileAction'
import { useDispatch, useSelector } from 'react-redux'

const UserProfile = () => {
    const [userDetails,setUserDetails]=useState({
        name:'Rizwan__izzy',
        about:'Building Newdev.io - Learn to code and connect'
    })
    // const userData =useSelector((state) => state.user.userData)
    // const dispatch =useDispatch()

    // useEffect(() =>{
    //     dispatch(fetchUserData())
    // },[dispatch])

    // const name=userData?.name
    // const about=userData?.about

    // console.log('userData',userData)
    const [editFormIsOpen,setEditFormIsOpen]=useState(false)
    const [profilePhoto,setProfilePhoto]=useState(profileIcon)

    const updateUserDetails=(event) =>{
        event.preventDefault()
        setUserDetails({
            name:event.target.nameOfUser.value,
            about:event.target.aboutUser.value
        })
        setEditFormIsOpen(false)
    }

    const editButton=<button className='edit__button' onClick={() => setEditFormIsOpen(true)}>Edit</button>
    const updateProfilePhoto = async () =>{
        const newProfilePhoto = await getPhotoUrl('#profilePhotoInput')
        setProfilePhoto(newProfilePhoto)
    }
    const editForm =(
        <form className='edit__bio__form' onSubmit={(e) => updateUserDetails(e)}>
            <input type="text" id='' name='nameOfUser' placeholder='Your name' />
            <input type="text" id='' name='aboutUser' placeholder='About' />
            <br />
            <button type='button' className='cancel__button' onClick={() => setEditFormIsOpen(false)}>Cancel</button>
            <button type='submit' className='save'>Save</button>
        </form>
    )
  return (
    <div>
        <div className="userPage">
            <div className="homepage__nav">
                <Sidenav />    
            </div>
            <div className="userProfile">
                <input type="file" accept='image/*' name='photo' id='profilePhotoInput' />
                <label htmlFor="profilePhotoInput" onClick={updateProfilePhoto}>
                    <div className="profile__photo" role='button' title='Click to edit photo'>
                        <img src={profilePhoto} alt="profile" />
                    </div>
                </label>
                
                <div className="profile__info">
                    <div className="userName">
                        <p className="name">{userDetails.name}</p>
                    </div>
                    
                    <p className="about">{userDetails.about}</p>
                    
                    {editFormIsOpen ? editForm : editButton}
                    
                </div>
                
            </div>
            
        </div>
        <div className="container">
            <div className="posts">
                <Gallery />
            </div>
        </div>
        
    </div>
  )
}

export default UserProfile
