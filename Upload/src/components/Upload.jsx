import React from 'react'
import './Upload.css'

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
      }
    };
  
    return (
      <div className="add-img" onClick={() => document.getElementById('fileInput').click()}>
        {selectedImage ? (
          <img src={selectedImage} alt="Preview" className="icon-add" />
        ) : (
          <>
            <img src="/images/add-img.png" className="icon-add" />
            <p>Adicione uma foto do seu Pet!</p>
          </>
        )}
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>
    );
  };

export default Upload