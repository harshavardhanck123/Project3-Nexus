import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>
  );
}

export default SocialMedia;
