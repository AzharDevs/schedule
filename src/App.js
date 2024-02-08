import './assets/styles/global.css';
import './App.css';
import GameCard from './components/GameCard';
import NavHeader from './components/NavHeader';
import Grid from '@mui/material/Grid';
import RightSidebar from './components/RightSidebar'
import LeftSidebar from './components/LeftSidebar'



function App() {
  return (
    <div className="App">
      <NavHeader/>
      <Grid container style={{ height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
        <Grid item xs={1} style={{ padding: '0', color: 'white', borderRight: '2px solid black' }}> 
          <LeftSidebar/>
        </Grid>
        <Grid item xs={10} container direction="row" justifyContent="center" alignItems="flex-start" style={{}}> 
          <Grid item xs={12} sm={4} style={{ padding: '1rem' }}>
            <GameCard game={0} />
          </Grid>
          <Grid item xs={12} sm={4} style={{ padding: '1rem' }}>
            <GameCard game={1} />
          </Grid>
          <Grid item xs={12} sm={4} style={{ padding: '1rem' }}>
            <GameCard game={2} />
          </Grid>
        </Grid>
        <Grid item xs={1} style={{ padding: '0', color: 'white', borderLeft: '2px solid black' }}> 
          <RightSidebar/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
