import React from 'react';
import ImageGallery from './ImageGallery'; // Your carousel component

const Home = () => {
  return (
    <div className="home">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 md:px-12">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">
            Web Development and Digital Marketing Firm
          </h1>
          <p className="text-xl mb-6">
            Grow your Business with Techy Software
          </p>
          <p className="text-lg">
            Get a professional website and digital marketing support for your business within your budget.
          </p>
        </div>

        {/* Right Side - Image Carousel */}
        <div className="md:w-1/2 py-12">
          <ImageGallery />
        </div>
      </div>
    </div>
  );
}

export default Home;
