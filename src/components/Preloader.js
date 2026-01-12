import React from 'react';
import './Preloader.css';

const Preloader = ({ loading }) => {
  return (
    <div className={`preloader-container ${!loading ? 'fade-out' : ''}`}>
      <img 
        src="/images/logo.png" 
        alt="Loading..." 
        className="preloader-logo"
      />
    </div>
  );
};

export default Preloader;
