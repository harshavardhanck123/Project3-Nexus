import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageGallery = () => {
  const imageUrls = [
    'https://nexusinfo.in/wp-content/uploads/2024/04/zeb-2.png',
    'https://nexusinfo.in/wp-content/uploads/2024/04/mockup-atmos5.png',
    'https://nexusinfo.in/wp-content/uploads/2024/04/ddf.png',
    'https://nexusinfo.in/wp-content/uploads/2024/06/vintage-closet-2.png',
    'https://nexusinfo.in/wp-content/uploads/2024/06/futball-1.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="image-gallery w-full">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index} className="px-2">
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageGallery;
