import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

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

  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h6"
        component="h3"
        sx={{ fontWeight: "50", fontSize: "0.8rem", color: "black" }}
      >
        {formatTime(currentTime)}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontWeight: "50", fontSize: "0.8rem", color: "black" }}
      >
        {formatDate(currentTime)}
      </Typography>
    </div>
  );
};

export default Sidebar;
