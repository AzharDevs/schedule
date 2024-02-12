import React from "react";
import "../assets/styles/NavHeader.css";

const NavHeader = () => {
  return (
    <div className="nav-header">
      <img
        src="https://i.logocdn.com/nba/current/nba.svg"
        alt="NBA"
        className="nba-logo"
      />
      <div className="nav-item">Mavericks</div>
      <div className="nav-item">Front Office</div>
      <div className="nav-item">Schedule</div>
      <img
        src="https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg"
        alt="Mavericks"
        className="mavs-logo"
      />
    </div>
  );
};

export default NavHeader;
