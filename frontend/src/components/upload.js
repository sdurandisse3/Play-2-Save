import React from 'react';
import * as firebase from 'firebase';
import ImageService from '../services/images';

class Upload extends React.Component{
  
  saveImage = (url) => {
    const date = Date();

    ImageService.saveImage(url, date);
  }

  handleFileInput = async (e) => {
    const firstFile = e.target.files[0];

    const root = firebase.storage().ref()
    const newImage = root.child(firstFile.name);

    try {
      const snapshot = await newImage.put(firstFile);
      const url = await snapshot.ref.getDownloadURL();
      this.saveImage(url);
    }
    catch(err) {
      console.log(err);
    }
    
  }


render(){
  return(
    <div className='container'>
    <div className="input-group mb-3">
      <div className="custom-file">
        <input type="file" className="custom-file-input" onChange={this.handleFileInput} />
        <label className="custom-file-label">Upload Image</label>
      </div>
    </div>
  </div>
  )
}
}
export default Upload;