import React from 'react';
import Typography from '@mui/material/Typography';
import gameData from '../data/gameData.json'

const Sidebar = () => {
  const mavericksData = gameData.standings.find(team => team.teamAbbreviation === "DAL");
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h6" component="h3" sx={{fontSize:'0.8rem', color: 'black', marginBottom: '1rem' }}>
       2023-2024 Season
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', gap:'4rem' }}>
      <div>
      <Typography variant="body1" sx={{ color: 'black' }}>
      <p style={{ margin: 0, fontSize:'35px', fontWeight:'bold' }}>{mavericksData.winPct.toFixed(1)}</p>
      <p style={{ margin: 0, fontSize:'15px' }}>WIN %</p>
      </Typography>      
      </div> 
      <div>
      <Typography variant="body1" sx={{ color: 'black' }}>
      <p style={{ margin: 0, fontSize:'35px', fontWeight:'bold' }}>{mavericksData.wins}</p>
      <p style={{ margin: 0, fontSize:'15px' }}>WINS</p>
      </Typography>      
      </div>
      <div>
      <Typography variant="body1" sx={{ color: 'black' }}>
      <p style={{ margin: 0, fontSize:'35px', fontWeight:'bold' }}>{mavericksData.losses}</p>
      <p style={{ margin: 0, fontSize:'15px' }}>LOSSES</p>
      </Typography>      
      </div> 
      <div>
      <Typography variant="body1" sx={{ color: 'black' }}>
      <p style={{ margin: 0, fontSize:'35px', fontWeight:'bold' }}>{mavericksData.divisionRank}</p>
      <p style={{ margin: 0, fontSize:'15px' }}>IN DIVISION</p>
      </Typography>      
      </div>  
      <div>
      <Typography variant="body1" sx={{ color: 'black' }}>
      <p style={{ margin: 0, fontSize:'35px', fontWeight:'bold' }}>{mavericksData.playoffRank}</p>
      <p style={{ margin: 0, fontSize:'15px' }}>PLAYOFF RANK</p>
      </Typography>      
      </div>   
      </div>
    </div>
    );
  };
  

export default Sidebar;
