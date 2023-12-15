import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Slideshowinfo = ({heading, info, btn, duration}) => {
    const [currIndex, setCurrIndex] = useState(0); 

    const Slideshowinfobtn = {
        color: "black",
        textDecoration: "none", 
        fontFamily: 'Avenir, Public Sans', 
        fontWeight: "600",
        fontSize: "1.3rem", 
        backgroundColor: "#F2D16D",
        border: "none", 
        borderRadius: "20px", 
        padding: "1%",
        marginLeft: "50%",
        marginRight: "10%", 
        maxWidth: "35%"
    }

    const Slideshowinfoh2 = {
      fontFamily: 'Avenir, Public Sans', 
        color: "white", 
        fontSize: "2.5rem",
        marginLeft: "50%",
        marginRight: "10%"
    }
    
    const Slideshowinfop = {
      fontFamily: 'Avenir, Public Sans', 
        color: "white",
        fontSize: "1.3rem",
        marginLeft: "50%",
        marginRight: "10%",
        marginBottom: "3%",
        lineHeight: "150%"
        }

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrIndex((prevIndex) => (prevIndex + 1) % heading.length);
        }, duration);
    
        return () => clearInterval(interval);
      }, [heading, info, btn, duration]);

      return <div id='Slideshowinfo-overlay'>{<h1 style={Slideshowinfoh2}>{heading[currIndex]}</h1>}
      {<p style={Slideshowinfop}>{info[currIndex]}</p>}
      {<Link to="./store" style={Slideshowinfobtn}>{btn[currIndex]}</Link>}
      </div>;

};

Slideshowinfo.propTypes = {
    heading: PropTypes.arrayOf(PropTypes.string).isRequired,
    info: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.number
  };
  
  Slideshowinfo.defaultProps = {
    duration: 10000 // Default is 10 seconds per slide
  };

  export default Slideshowinfo; 
