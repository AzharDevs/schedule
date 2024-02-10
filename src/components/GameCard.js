import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import gameData from '../data/gameData.json'

const getDayOfWeek = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};




const StyledCard = styled(Card)({
  background: 'white',
  color: '#ffffff',   
  height: '100%', 
   
});



const TopBar = styled('div')({
  backgroundColor: '#0061BE',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem 1rem',
  color: "black",
  height: '4rem'
});

const GameCard = ({ game }) => {
  const match = gameData.games[game];
  const date = new Date(match.date);
  const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const time = match.timeEst.replace('Est', '').trim();
  const homeTeamData = gameData.teamData.find(team => team.team === match.homeTeam);
  const awayTeamData = gameData.teamData.find(team => team.team === match.awayTeam);
  const dayOfWeek = getDayOfWeek(match.date);
  const isHomeGame = match.arena === "American Airlines Center";
  const opposingTeamData = isHomeGame ? gameData.teamData.find(team => team.team === match.awayTeam) :  gameData.teamData.find(team => team.team === match.homeTeam);
  const mavsTeamPoints = isHomeGame ? match.homePts : match.awayPts;
  const opposingTeamPoints = isHomeGame ? match.awayPts : match.homePts;
  const displayScore = match.gameStatus === 2 || match.gameStatus === 3;

  


  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#001A2C', color: '#ffffff' }}>
      <StyledCard>
      <TopBar>
      <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <Typography variant="h5" component="div" style={{ fontSize: '30px', textAlign: 'center', fontWeight: 700, color: 'white', textTransform: 'uppercase' }}>
        {isHomeGame ? 'Home' : 'Away'}
      </Typography> 
      <Typography variant="h5" component="div" style={{ fontSize: '15px', textAlign: 'center', color: 'white', textTransform: 'uppercase' }}>
        @ {match.arena}
      </Typography> 
      </div>
      </TopBar>
      <CardContent>
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', justifyContent: 'center', width: '100%', height: '100%' }}>
    
    {/*Match Information*/}
    <div style={{ flex: 1, textAlign: 'center', borderRight: '2px solid gray' }}>
      <Typography variant="h5" component="div" sx={{ fontSize: 15, color: 'black' }}>
        <p style={{ margin: 0, fontWeight:700 }}>{dayOfWeek}</p>
        <p style={{ margin: 0, fontWeight:'bold' }}>{formattedDate}</p>
        <p style={{ margin: 0 }}>{time}</p>
        {displayScore && <p style={{ margin: 0, fontWeight:'bold' }}>{mavsTeamPoints} - {opposingTeamPoints}</p>}
      </Typography>
    </div>

    {/* Team Name Info */}
    <div style={{ flex: 1, textAlign: 'center', borderRight: '2px solid gray', paddingLeft: '8px', paddingRight: '8px' }}>
      <Typography variant="h5" component="div" sx={{ fontSize: 15, color: 'black', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        <p style={{ margin: 0 }}>{opposingTeamData.teamCity}</p>
        <p style={{ margin: 0, fontWeight: 700 }}>{opposingTeamData.teamName}</p>
      </Typography>
    </div>

    {/* Team Logo */}
    <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={opposingTeamData.logo} alt={opposingTeamData.teamName} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  
    </div>


  </div>
</CardContent>
    </StyledCard>
    </Card>
    
  );
};

export default GameCard;
