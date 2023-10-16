import React from 'react';

const RitualSubjects = () => {
    return (
      <div className="ritual-subjects">
        <div className="ritual-subjects__div main-pentagram">
          <img className="main-pentagram__img" src="./assets/IMG/main-pentagram.png" alt="main-pentagram"></img>
        </div>
        <div className="ritual-subjects__div bafomet-head">
          <img className="bafomet-head__img" src="./assets/IMG/bafomet-head.png" alt="bafomet-head">
          </img>
        </div>
        <div className="ritual-subjects__div pentacle">
          <img className="pentacle__img" src="./assets/IMG/pentacle.png" alt="pentacle"></img>
          <div id="candle-1" className="candle">
            <img className="candle-img" src="./assets/IMG/candle.png" alt="candle"></img>
            <img id="fire-1" className="candle-fire" src="./assets/IMG/candle-fire.gif" alt="candle-fire"></img>
          </div>
        </div>
        <div className="ritual-subjects__div right-pentacle">
          <img className="right-pentacle__img" src="./assets/IMG/right-pentacle.png" alt="pentacle"></img>
          <div id="candle-2" className="candle">
            <img className="candle-img" src="./assets/IMG/candle.png" alt="candle"></img>
            <img id="fire-2" className="candle-fire" src="./assets/IMG/candle-fire.gif" alt="candle-fire"></img>
          </div>
        </div>
        <div className="ritual-subjects__div bafomet-stamp">
          <img className="bafomet-stamp__img" src="./assets/IMG/Bafomet-stamp.png" alt="bafomet-stamp"></img>
          <div id="candle-3" className="candle">
            <img className="candle-img" src="./assets/IMG/candle.png" alt="candle"></img>
            <img id="fire-3" className="candle-fire" src="./assets/IMG/candle-fire.gif" alt="candle-fire"></img>
          </div>
        </div>
      </div>
    )
}

export default RitualSubjects;