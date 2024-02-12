import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
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

import CloseIcon from "@mui/icons-material/Close";

const StyledCard = styled(Card)({
  backgroundColor: "#001A2C",
  color: "#ffffff",
  borderRadius: "0.5rem",
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
  margin: "0.625rem auto",
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

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: "31.25rem",
  bgcolor: "background.paper",
  border: "0.125rem solid #000",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
};

const playerImageStyle = {
  width: "6.25rem",
  height: "auto",
  "@media (min-width:37.5rem)": {
    width: "9.375rem",
  },
};

const GameResearch = ({ stats, gameData }) => {
  const [showOffensive, setShowOffensive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [reportText, setReportText] = useState("");
  const [scoutName, setScoutName] = useState("");
  const [selectedPlayerDetails, setSelectedPlayerDetails] = useState(null);

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
          [stats.homeStats.team]: stats.homeStats["FTA"],
          [stats.awayStats.team]: stats.awayStats["FTA"],
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

  const handlePlayerSelection = (event) => {
    const playerId = event.target.value;
    setSelectedPlayer(playerId);
    const playerDetails = gameData.playerStats.find(
      (player) => player.nbaId === playerId,
    );
    if (playerDetails) {
      const heightFeet = Math.floor(playerDetails.height / 12);
      const heightInches = playerDetails.height % 12;

      setSelectedPlayerDetails({
        ...playerDetails,
        height: `${heightFeet}'${heightInches}"`,
      });
    }
  };

  const handleReportChange = (event) => {
    setReportText(event.target.value);
  };

  const handleScoutNameChange = (event) => {
    setScoutName(event.target.value);
  };

  const [scoutingReports, setScoutingReports] = useState([]);

  const handleReportSubmit = () => {
    const newReport = {
      nbaGameId: stats.gameId,
      scout: scoutName,
      nbaId: selectedPlayer,
      name: stats.opponentRoster.find(
        (player) => player.nbaId === selectedPlayer,
      )?.name,
      report: reportText,
    };

    setScoutingReports([...scoutingReports, newReport]);
    setIsModalOpen(false);
  };

  const data = showOffensive ? offensiveData : defensiveData;

  return (
    <StyledCard>
      <TopBar>
        <Typography
          variant="h5"
          component="div"
          style={{
            fontSize: "1.875rem",
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
        <Button
          onClick={() => setIsModalOpen(true)}
          style={{
            fontSize: "0.625rem",
            color: "white",
            backgroundColor: "#0061BE",
            fontWeight: "bold",
          }}
        >
          Add Scouting Report
        </Button>

        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={() => setIsModalOpen(false)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              New Scouting Report
            </Typography>
            <Select
              displayEmpty
              fullWidth
              onChange={handlePlayerSelection}
              defaultValue=""
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200,
                    overflow: "auto",
                  },
                },
              }}
              style={{ marginTop: "1.25rem" }}
            >
              <MenuItem disabled value="">
                <em>Select a Player</em>
              </MenuItem>
              {stats?.opponentRoster.map((player) => (
                <MenuItem key={player.nbaId} value={player.nbaId}>
                  {player.name}
                </MenuItem>
              ))}
            </Select>
            {selectedPlayerDetails && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                <Box>
                  <img
                    src={selectedPlayerDetails.photoUrl}
                    alt={selectedPlayerDetails.name}
                    style={playerImageStyle}
                  />
                </Box>
                <Box>
                  <Typography style={{ fontWeight: 'bold' }}>
                    Height: {selectedPlayerDetails.height}
                  </Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    Weight: {selectedPlayerDetails.weight} lbs
                  </Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    Jersey: #{selectedPlayerDetails.jerseyNum}
                  </Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    FT%: {selectedPlayerDetails.ftp}
                  </Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    TP%: {selectedPlayerDetails.tpp}
                    </Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    PTS: {selectedPlayerDetails.pts}
                  </Typography>
                  <Typography style={{ fontWeight: 'bold' }}>
                    +/-: {selectedPlayerDetails.plusMinus}
                  </Typography>
                </Box>
              </Box>
            )}
            <TextField
              fullWidth
              label="Scout's Name"
              margin="dense"
              variant="outlined"
              value={scoutName}
              onChange={handleScoutNameChange}
              style={{ marginTop: "1.25rem" }}
            />
            <TextField
              fullWidth
              label="Scouting Report"
              multiline
              rows={4}
              margin="dense"
              variant="outlined"
              value={reportText}
              onChange={handleReportChange}
              style={{ marginTop: "1.25rem" }}
            />

            <Button onClick={handleReportSubmit} style={{ marginTop: "1.25rem" }}>
              Submit
            </Button>
          </Box>
        </Modal>
        {stats ? (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              layout="vertical"
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid stroke="none" />
              <XAxis type="number" />
              <YAxis
                dataKey="name"
                type="category"
                width={120}
                tick={{ fill: "black", fontWeight: "bold" }}
              />
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
