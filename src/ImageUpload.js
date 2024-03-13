import React, { useState } from 'react';
import { ImageStore } from './utils/firebase'; 

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      console.log('Uploading image:', selectedImage.name);
      ImageStore(selectedImage); 
      setSelectedImage(null);
    } else {
      alert('Please select an image to upload.');
    }
  };

  return (
    <div>
      <h2>Add an Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {selectedImage && (
        <div>
          <p>Selected Image: {selectedImage.name}</p>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="200" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
