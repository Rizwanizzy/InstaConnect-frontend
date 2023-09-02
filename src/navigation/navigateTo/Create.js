import React,{useRef} from 'react'

const Create = () => {
    const fileInputRef = useRef(null)

    const handleFileInputChange = (e) =>{
        // const selectedFile = e.target.files[0];
    }
  return (
    <div>
        <input type="file" name="photo" id="addPhotoInput" ref={fileInputRef} onChange={handleFileInputChange} style={{ display: 'none' }}/>
        <label htmlFor="addPhotoInput">
            <span>Create</span>
        </label>
    </div>
  )
}

export default Create
