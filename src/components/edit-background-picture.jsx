import React, { useState } from 'react';

function BackgroundUploader() {
  const [backgroundPicture, setbackgroundPicture] = useState(null);

  const handlePictureUpload = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        setbackgroundPicture(event.target.result);
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div>
      <label htmlFor="picture-upload">Upload Profile Picture</label>
      <input
        type="file"
        id="picture-upload"
        accept="image/*"
        onChange={handlePictureUpload}
      />
      {backgroundPicture && (
        <img src={backgroundPicture} alt="Profile" width="150" height="150" />
      )}
    </div>
  );
}

export default BackgroundUploader;
