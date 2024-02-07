import './assets/styles/global.css';
import './App.css';
import GameCard from './components/GameCard';
import Grid from '@mui/material/Grid';

const sampleGame = {
  opponent: 'Opposing Team Name',
  date: 'Feb 20, 2024',
  status: 'Not Started'
};


function App() {
  return (
    <div className="App">
      <Grid container direction="column" style={{ height: '100vh', padding: '1rem' }}>
        <Grid item style={{ marginBottom: '1rem' }}>
          <div>Nav Holder</div>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={8} md={6} lg={6} style={{ padding: '1rem' }}>
            <GameCard game={sampleGame} />
          </Grid>
          <Grid item xs={12} sm={4} md={6} lg={6} style={{ padding: '1rem' }}>
            <div>Game Stats Holder</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
<GameCard game={sampleGame} />