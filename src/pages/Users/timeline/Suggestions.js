import React from 'react'
import { Avatar } from '@mui/material'
import './Suggestions.css'


const Suggestions = () => {
  return (
    <div className='suggessions'>
      <div className="suggesstions__title">Suggesstions for you</div>
      <div className="suggesstions_usernames">

        <div className="suggesstion__username">
            <div className="username__left">
                <span className="avatar">
                    <Avatar>R</Avatar>
                </span>
                <div className="username__info">
                    <span className='username'>redian_</span>
                    <span className='relation'>New to Instaconnect</span>
                </div>
            </div>
            <button className="follow__button">Follow</button>
        </div>
        <div className="suggesstion__username">
            <div className="username__left">
                <span className="avatar">
                    <Avatar>R</Avatar>
                </span>
                <div className="username__info">
                    <span className='username'>redian_</span>
                    <span className='relation'>New to Instaconnect</span>
                </div>
            </div>
            <button className="follow__button">Follow</button>
        </div>
        <div className="suggesstion__username">
            <div className="username__left">
                <span className="avatar">
                    <Avatar>R</Avatar>
                </span>
                <div className="username__info">
                    <span className='username'>redian_</span>
                    <span className='relation'>New to Instaconnect</span>
                </div>
            </div>
            <button className="follow__button">Follow</button>
        </div>
        <div className="suggesstion__username">
            <div className="username__left">
                <span className="avatar">
                    <Avatar>R</Avatar>
                </span>
                <div className="username__info">
                    <span className='username'>redian_</span>
                    <span className='relation'>New to Instaconnect</span>
                </div>
            </div>
            <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestions
