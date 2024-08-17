import React from 'react';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; 2024 Techy Software. All rights reserved.</p>
        <SocialMedia />
      </div>
    </footer>
  );
}

export default Footer;
