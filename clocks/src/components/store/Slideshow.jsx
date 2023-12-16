

import React, { useState, useEffect } from 'react';
import imageUrls from './imageData'; // Import the image data
import './Slideshow.css'; // Make sure to create appropriate CSS for controls

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const intervalTime = hover ? 6000 : 3000; // Slow down to 6 seconds on hover, otherwise 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentIndex, hover, isPaused, images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);


  return (
    <div className="slideshow-container"
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}/>
      <div className="controls">
        <button onClick={goToPrevious}>&lt;</button>
        <button id='pauseresumebtn' onClick={togglePause}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button onClick={goToNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Slideshow;