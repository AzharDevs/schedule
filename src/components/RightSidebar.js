import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const Sidebar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (date) => {
      return date.toLocaleTimeString();
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" component="h3" sx={{fontWeight:'50', fontSize:'1rem', color:'black' }}>
          {formatTime(currentTime)}
        </Typography>
      </div>
    );
  };
  

export default Sidebar;
