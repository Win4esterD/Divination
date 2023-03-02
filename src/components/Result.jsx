import React from 'react';
import '../styles/results.scss';

class Result extends React.Component{
  
  render(){
    return (
      <div className="results-wrapper">
        <div className="card-block">
          <p className="arcane-name">Шут</p>
          <div className="arcane-image-div"><img className="arcane-image-img" src="../assets/IMG/card-images/Waite/Trumps/Fool.png"></img></div>
        </div>
        <div className="result-text">
          <p className="arcane-meaning">Описание аркана:</p>
          <p className="arcane-description">Шут символизирует любознательность, открытость, готовность к экспериментам и спонтанным поступкам. Он способен импровизировать, он также может вносить в жизнь неожиданность и хаос.</p>
          <p className="arcane-meaning">Значение аркана:</p>
          <p className="arcane-description">Нововое начинание, любознательность, открытость чему-то новому в жизни, спонтанные поступки. Открытость, надвигающийся хаос, желание попробовать что-то новое и неожиданное.</p>
          <div className="in-life-paragraphs">
            <p><span className="in-life">В любви и отношениях - </span><span>слабость, радость и игру.</span></p>
            <p><span className="in-life">В профессии - </span><span>новое начало, дилетантизм.</span></p>
            <p><span className="in-life">В целом - </span><span>новое начало, дилетантизм.</span></p>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Result;