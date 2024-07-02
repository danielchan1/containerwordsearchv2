import React from 'react';
import Image from 'next/image';
import './Footer.css';

// Import the PNG image
import wordnikLogo from '../../public/wordnik_badge_a1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Image src={wordnikLogo} alt="Wordnik Logo" className="footer-image" unoptimized/>
        {/* <p className="footer-text">Thanks for visiting this website!</p> */}
      </div>
    </footer>
  );
};

export default Footer;
