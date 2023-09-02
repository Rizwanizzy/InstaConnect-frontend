import React, { useState } from 'react'
import './Gallery.css'
import getPhotoUrl from 'get-photo-url'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Gallery = () => {
    const [allPhotos,setAllPhotos]=useState([])

    const addPhoto = async () => {
        const newPhoto ={
            id:Date.now(),
            url: await getPhotoUrl('#addPhotoInput')
        }
        setAllPhotos([newPhoto, ...allPhotos])
    }
  return (
    <div>
        <input type="file" name="photo" id="addPhotoInput"/>
        <label htmlFor="addPhotoInput" onClick={addPhoto}>
            <span className="add__photo__button"><AddCircleIcon /></span>
        </label>
        <section className='gallery'>
            {allPhotos.map((photo) => (
                <div className="item" key={photo.id}>
                    <img src={photo.url} className='item__image' alt="" />
                    <button className='delete__button'>Delete</button>
                </div>
            ))}
            
        </section>
    </div>
  )
}

export default Gallery
