import * as React from "react";
import Header from './components/header';
import Main from './components/main';
const cardsRus = require('./JSON/cards-rus.json');


class App extends React.Component{
  render(){
    return(
          <div className='site-wrapper'>
            <Header />
            <Main />
          </div>
    )
  }
}

export default App;