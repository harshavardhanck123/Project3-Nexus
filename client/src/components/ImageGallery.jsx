import React, { useEffect, useState } from 'react';
import axios from '../services/api';


const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/images'); // Adjust endpoint as necessary
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={image.description} />
      ))}
    </div>
  );
}

export default ImageGallery;

