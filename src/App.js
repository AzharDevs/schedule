import React, { useState } from "react";
import "./assets/styles/global.css";
import "./App.css";
import GameCard from "./components/GameCard";
import NavHeader from "./components/NavHeader";
import Grid from "@mui/material/Grid";
import RightSidebar from "./components/RightSidebar";
import LeftSidebar from "./components/LeftSidebar";
import GameResearch from "./components/GameResearch";

function App() {
  const [stats, setStats] = useState(null);

  const onShowStats = (homeStats, awayStats) => {
    setStats({ homeStats, awayStats });
  };

  return (
    <div className="App">
      <NavHeader />
      <Grid
        container
        style={{ height: "calc(100vh - 64px)", overflow: "hidden" }}
      >
        <Grid
          item
          xs={1}
          style={{
            padding: "0",
            color: "white",
            borderRight: "1px solid black",
          }}
        >
          <LeftSidebar />
        </Grid>
        <Grid item xs={10} style={{ display: "flex", flexDirection: "column" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            style={{ marginBottom: "1rem" }}
          >
            <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
              <GameCard game={0} onShowStats={onShowStats} />
            </Grid>
            <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
              <GameCard game={1} onShowStats={onShowStats} />
            </Grid>
            <Grid item xs={12} sm={4} style={{ padding: "1rem" }}>
              <GameCard game={2} onShowStats={onShowStats} />
            </Grid>
          </Grid>
          <Grid item xs={12} style={{ padding: "1rem" }}>
            <GameResearch stats={stats} />
          </Grid>
        </Grid>
        <Grid
          item
          xs={1}
          style={{
            padding: "0",
            color: "white",
            borderLeft: "1px solid black",
          }}
        >
          <RightSidebar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
