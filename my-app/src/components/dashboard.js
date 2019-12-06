import React from 'react';

// button for : strike, ball, foul, hit
/// changes shouold update info in display

// balls/strikes rest to 0 when reaches 3 strikes or 4 balls
// balls/strikes reset to 0 when hit is recorded
// foul increases strikes up to 2
// no strikes ~ a foul makes it 1 strike
// 1 strike ~ a foul makes it 2 strikes 
// 2 strikes ~ a foul has no effect
// display the count of balls/strikes for the at-bat
// updates when usser records activity on the dashboard component

 const Dashboard = (props) => {

    return(
          <section className='buttons'>

            <div className='strike-button'>
                <button onClick={props.handleStrike}>
                    Strike
                </button>
            </div>

            <div className='ball-button'>
                <button onClick={props.handleBalls}>
                    Ball
                </button>
            </div>

            <div className='foul-button'>
                <button onClick={props.handleFoul}>
                    Foul
                </button>
            </div>

            <div className='hit-button'>
                <button onClick={props.handleHit}>
                    Hit
                </button>
            </div>

    </section>
    )
  

}

export default Dashboard;