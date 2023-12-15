import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const styles = {
  slideshow: {
    position: 'relative',
    display: 'flex', 
    overflow: 'hidden',
    marginTop: '40px',
    width: '100%',
    height: '550px'

  },
  slideImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    objectFit: 'cover',
    filter: "blur(7px)"
  }

};

function Slideshow({ images, duration }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div style={styles.slideshow}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide-${index}`}
          style={{
            ...styles.slideImage,
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 0.5s'
          }}
        />
      ))}
    </div>
  );
}

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.number
};

Slideshow.defaultProps = {
  duration: 5000 // Default is 5 seconds per slide
};

export default Slideshow;