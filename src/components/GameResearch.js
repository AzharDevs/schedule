import React, { useState } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StyledCard = styled(Card)({
  backgroundColor: "#001A2C",
  color: "#ffffff",
  borderRadius: "8px",
});

const TopBar = styled("div")({
  backgroundColor: "#0061BE",
  padding: "0.5rem 1rem",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "4rem",
});

const ToggleButton = styled(Button)({
  margin: "10px auto",
  display: "block",
  backgroundColor: "#fff",
  color: "#0061BE",
  "&.offensive": {
    fontWeight: "bold",
  },
  "&.defensive": {
    fontWeight: "bold",
  },
  transition: "all 0.3s ease",
});

const GameResearch = ({ stats }) => {
  const [showOffensive, setShowOffensive] = useState(true);

  const offensiveData = stats
    ? [
        {
          name: "Offensive Rank",
          [stats.homeStats.team]: stats.homeStats["OFF RTG_rank"],
          [stats.awayStats.team]: stats.awayStats["OFF RTG_rank"],
        },
        {
          name: "Effective Field Goal Percentage %",
          [stats.homeStats.team]: stats.homeStats["OFF REB%"],
          [stats.awayStats.team]: stats.awayStats["OFF REB%"],
        },
        {
          name: "Free Throw Attempts",
          [stats.homeStats.team]: stats.homeStats["FTA"],
          [stats.awayStats.team]: stats.awayStats["FTA"],
        },
        {
          name: "Turnover Rank",
          [stats.homeStats.team]: stats.homeStats["TURNOVERS_rank"],
          [stats.awayStats.team]: stats.awayStats["TURNOVERS_rank"],
        },
      ]
    : [];

  const defensiveData = stats
    ? [
        {
          name: "Defensive Rank",
          [stats.homeStats.team]: stats.homeStats["DEF RTG_rank"],
          [stats.awayStats.team]: stats.awayStats["DEF RTG_rank"],
        },
        {
          name: "Defensive Rebound %",
          [stats.homeStats.team]: stats.homeStats["DEF REB%"],
          [stats.awayStats.team]: stats.awayStats["DEF REB%"],
        },
        {
          name: "Free Throws Allowed",
          [stats.homeStats.team]: stats.homeStats["FTA ALLOWED"],
          [stats.awayStats.team]: stats.awayStats["FTA ALLWOED"],
        },
        {
          name: "Turnovers Forced",
          [stats.homeStats.team]: stats.homeStats["TURNOVERS FORCED"],
          [stats.awayStats.team]: stats.awayStats["TURNOVERS FORCED"],
        },
      ]
    : [];

  const toggleData = () => {
    setShowOffensive(!showOffensive);
  };

  const data = showOffensive ? offensiveData : defensiveData;

  return (
    <StyledCard>
      <TopBar>
        <Typography
          variant="h5"
          component="div"
          style={{
            fontSize: "30px",
            textAlign: "center",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Game Analysis
        </Typography>
      </TopBar>
      <CardContent style={{ backgroundColor: "white", color: "black" }}>
        <ToggleButton
          onClick={toggleData}
          className={showOffensive ? "offensive" : "defensive"}
        >
          {showOffensive ? "Defensive Stats" : "Offensive Stats"}
        </ToggleButton>
        {stats ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid stroke="none" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={120} tick={{ fill: 'black', fontWeight: 'bold', }}/>
              <Tooltip />
              <Legend />
              <Bar
                dataKey={stats.homeStats.team}
                fill="#0160BE"
                isAnimationActive={true}
              />
              <Bar
                dataKey={stats.awayStats.team}
                fill="#3D9970"
                isAnimationActive={true}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <Typography>Select a game for analysis</Typography>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default GameResearch;
