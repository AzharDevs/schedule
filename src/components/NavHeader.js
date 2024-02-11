import React from "react";

const NavHeader = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "1rem",
    color: "black",
    borderBottom: "1px solid #000000",
    height: "2rem",
  };

  const navItemStyle = {
    textTransform: "uppercase",
    fontFamily: "ProtestStrike",
    fontSize: "15px",
  };

  const mavsLogoStyle = {
    height: "auto",
    width: "1.5rem",
    marginRight: "1rem",
    marginLeft: "1rem",
  };

  const nbaLogoStyle = {
    height: "auto",
    width: "4rem",
    marginRight: "1rem",
    marginLeft: "1rem",
  };

  return (
    <div style={headerStyle}>
      <img
        src="https://i.logocdn.com/nba/current/nba.svg"
        alt="NBA"
        style={mavsLogoStyle}
      />
      <div style={navItemStyle}>Mavericks</div>
      <div style={navItemStyle}>Front Office</div>
      <div style={navItemStyle}>Schedule</div>
      <img
        src="https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg"
        alt="NBA"
        style={nbaLogoStyle}
      />
    </div>
  );
};

export default NavHeader;
