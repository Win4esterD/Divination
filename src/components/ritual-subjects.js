import React from 'react';

class RitualSubjects extends React.Component{
  render(){
    return (
      <div className="ritual-subjects">
        <div className="ritual-subjects__div main-pentagram"><img src="../assets/main-pentagram.png" alt="main-pentagram"></img></div>
        <div className="ritual-subjects__div"><img src="../assets/bafomet-head.png" alt="bafomet-head"></img></div>
        <div className="ritual-subjects__div bafomet-stamp">
          <img src="../assets/Bafomet-stamp.png" alt="bafomet-stamp"></img>
          <div className="candle">
          <img className="candle-img" src="../assets/candle.png" alt="candle"></img>
          <img className="candle-fire" src="../assets/candle-fire.gif" alt="candle-fire"></img>
        </div>
        </div>
        <div className="ritual-subjects__div pentacle">
          <img src="../assets/pentacle.png" alt="pentacle"></img>
          <div className="candle">
            <img className="candle-img" src="../assets/candle.png" alt="candle"></img>
            <img className="candle-fire" src="../assets/candle-fire.gif" alt="candle-fire"></img>
          </div>
          </div>
        <div className="ritual-subjects__div right-pentacle">
          <img src="../assets/right-pentacle.png" alt="pentacle"></img>
          <div className="candle">
            <img className="candle-img" src="../assets/candle.png" alt="candle"></img>
            <img className="candle-fire" src="../assets/candle-fire.gif" alt="candle-fire"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default RitualSubjects;