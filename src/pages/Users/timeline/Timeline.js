import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline(){
    const [posts,setPosts]=useState([
        {
            user:'redian_',
            postImage:'https://www.whoa.in/download/photoshoot-love-heart-created-by-young-couple-hand-hd-images-photos-fb-images-free-download',
            likes:12,
            timestamp:'2d'
        },
        {
            user:'johndoe',
            postImage:'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
            likes:56,
            timestamp:'5d'
        },
        {
            user:'apa_che',
            postImage:'https://i.pinimg.com/736x/f7/75/7d/f7757d5977c6ade5ba352ec583fe8e40.jpg',
            likes:37,
            timestamp:'3d'
        },
        {
            user:'ronie',
            postImage:'https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg',
            likes:10,
            timestamp:'1d'
        },
    ])
  return (
    <div className='timeline'>
      <div className="timeline__left">
        <div className="timeline__posts">
            {posts.map((post) =>(
                <Post user={post.user} 
                    postImage={post.postImage} 
                    likes={post.likes} 
                    timestamp={post.timestamp}
                />
            ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline
