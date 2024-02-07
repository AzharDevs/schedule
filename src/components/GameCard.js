import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';



const StyledCard = styled(Card)({
  background: 'linear-gradient(to top, #002855, #63a4ff)',
  color: '#ffffff',         
  borderRadius: 8,     
});

const TopBar = styled('div')({
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem 1rem',
  color: "black",
  borderTopLeftRadius: 'inherit', 
  borderTopRightRadius: 'inherit',
});

const GameCard = ({ game }) => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: '#001A2C', color: '#ffffff' }}>
      <StyledCard>
        <TopBar>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700, fontFamily: "Roboto" }}>
          SEASON SCHEDULE
        </Typography>
        </TopBar>
      <CardContent>
        <Typography variant="h5" component="div">
          {game.opponent}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {game.date}
        </Typography>
        <Typography variant="body2">
          Game Status: {game.status}
        </Typography>
      </CardContent>
      </StyledCard>
    </Card>
  );
};

export default GameCard;
