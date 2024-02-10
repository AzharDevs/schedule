import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  backgroundColor: '#001A2C',
  color: '#ffffff',
  borderRadius: '8px', 
});

const TopBar = styled('div')({
  backgroundColor: '#0061BE',
  padding: '0.5rem 1rem',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '4rem',
});

const GameResearch = () => {
  return (
    <StyledCard>
      <TopBar>
        <Typography variant="h5" component="div" style={{ fontSize: '30px', textAlign: 'center', fontWeight: 700, textTransform: 'uppercase' }}>
          Game Research
        </Typography>
      </TopBar>
      <CardContent style={{ backgroundColor: 'white', color: 'black' }}>
        Game Research Filler
      </CardContent>
    </StyledCard>
  );
};

export default GameResearch;
