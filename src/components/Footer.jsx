import React from 'react';
import "../styles/footer.scss";

class Footer extends React.Component{
  render(){
    return(
      <footer>
        <div className="gh-wrapper">
          <a href="https://github.com/Win4esterD"><img className="gh-img" src="./assets/IMG/github.png" alt="github"></img> <a className="gh-link" href="https://github.com/Win4esterD">Win4esterD</a></a>
        </div>
        <div className="ln-wrapper">
          <a href="https://www.linkedin.com/in/pavel-didenko-9b6371181/"><img src="./assets/IMG/linkedIn.png" className="ln-image"></img></a>
        </div>
      </footer>
    )
  }
}

export default Footer;