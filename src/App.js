import * as React from "react";
import Header from './components/header';
import Main from './components/main';

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