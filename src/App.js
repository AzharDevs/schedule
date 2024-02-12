import React, { useState } from "react";
import "./assets/styles/global.css";
import "./App.css";
import GameCard from "./components/GameCard";
import NavHeader from "./components/NavHeader";
import Grid from "@mui/material/Grid";
import GameResearch from "./components/GameResearch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gameData from "./data/gameData.json";

function App() {
  const [stats, setStats] = useState(null);

  const onShowStats = (homeStats, awayStats, gameId, opponentRoster) => {
    setStats({ homeStats, awayStats, gameId, opponentRoster });
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 825,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const gridItemStyle = {
    marginTop: "1rem",
  };

  return (
    <div className="App">
      <NavHeader />
      <Grid
        container
        style={{ height: "calc(100vh - 64px)", overflow: "hidden" }}
      >
        <Grid item xs={12} style={gridItemStyle}>
          <div className="custom-slider">
            <Slider {...settings}>
              <div slideContainerStyle>
                <GameCard
                  game={0}
                  onShowStats={onShowStats}
                  gameData={gameData}
                />
              </div>
              <div>
                <GameCard
                  game={1}
                  onShowStats={onShowStats}
                  gameData={gameData}
                />
              </div>
              <div>
                <GameCard
                  game={2}
                  onShowStats={onShowStats}
                  gameData={gameData}
                />
              </div>
            </Slider>
          </div>
          <div style={{ padding: "0rem 1rem 1rem 1rem" }}>
            <GameResearch stats={stats} gameData={gameData} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
