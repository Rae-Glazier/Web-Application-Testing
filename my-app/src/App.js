import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import  Dashboard  from './components/dashboard';
import  Display  from './components/display';



function App() {

  const [strike, setStrike] = useState(0);
  const [balls, setBalls] = useState(0);

  const handleStrike = () => {
    if (strike < 2){setStrike(strike+1)}
    else{handleHit()}
  }

  const handleBalls = () => {
    if(balls < 3){setBalls(balls+1)}
    else(handleHit())
  }

  const handleFoul = () => {
    if(strike < 2){setStrike(strike+1)}
    else(setStrike(strike))
  }

  const handleHit = () => {
    setStrike(0)
    setBalls(0)
  }

  return (
    <div className="App">
        <h1>Web Application Testing</h1>

          <Display 
            strike={strike}
            balls={balls}
          />
   
          <Dashboard 
            handleStrike = {handleStrike}
            handleBalls = {handleBalls}
            handleFoul = {handleFoul}
            handleHit = {handleHit}
          />

    </div>
  );
}

export default App;
