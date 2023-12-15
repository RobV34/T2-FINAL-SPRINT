
import React, { useEffect, useState } from 'react';
import './Clock.css'; // CSS file for clock styles

const Clock = () => {
    const [time, setTime] = useState(new Date()); // initialize time with current time
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date()); // update time
        }, 1000);

        return () => {
            clearInterval(timer); // cleanup function
        };
    }, []); 

    const secondAngle = time.getSeconds() * 6; // 360 / 60 = 6
    const minuteAngle = time.getMinutes() * 6 + secondAngle / 60; // 360 / 60 = 6
    const hourAngle = (time.getHours() % 12) * 30 + minuteAngle / 12; // 360 / 12 = 30

    return (
        <div id="clock">
            <div id='Clock-circle12'></div>
            <div id='Clock-circle3'></div>
            <div id='Clock-circle6'></div>
            <div id='Clock-circle9'></div>
            <div id='Clock-center'></div>
            <div id="hour-hand" className="hand" style={{ transform: `rotate(${hourAngle}deg)` }}></div> 
            <div id="minute-hand" className="hand" style={{ transform: `rotate(${minuteAngle}deg)` }}></div>
            <div id="second-hand" className="hand" style={{ transform: `rotate(${secondAngle}deg)` }}></div>
        </div>
    );
};

export default Clock;