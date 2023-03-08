import * as React from "react";
import Header from './components/header';
import Main from './components/main';
import Footer from './components/Footer';


class App extends React.Component{
  render(){
    return(
        <div className='site-wrapper'>
            <Header />
            <Main />
            <Footer />
          </div>
    )
  }
}

export default App;