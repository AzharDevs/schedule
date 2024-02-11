import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  backgroundColor: "#001A2C",
  color: "#ffffff",
  borderRadius: "8px",
  borderRadius: "1",
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

const RoasterLineup = () => {
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
          Lineup Setter
        </Typography>
      </TopBar>
      <CardContent style={{ backgroundColor: "white", color: "black" }}>
        Lineup Setter
      </CardContent>
    </StyledCard>
  );
};

export default RoasterLineup;
