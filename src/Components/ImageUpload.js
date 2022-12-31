import { uploadProfileImage } from '../Firebase'
import React from 'react'

function ImageUpload(props) {

  const formHandler = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    await uploadProfileImage(file)
    props.refresh(true);
  }

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" className="flex"></input>
        <button className='bg-slate-500' type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ImageUpload