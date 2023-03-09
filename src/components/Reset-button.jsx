import React from 'react';
import '../styles/components/reset-button.scss';

class ResetButton extends React.Component{
  setButtonLanguage(){
    const language = this.props.language;
    if(this.props.language === "Русский"){
      return "Начать Заново";
    }else if(this.props.language === "English"){
      return "Start Over";
    }else if(this.props.language === "Español"){
      return "De Nuevo";
    }
  }
  render(){
    return(
      <button className="reset-button" onClick={this.props.resetButtonHandler}>{this.setButtonLanguage()}</button>
    )
  }
}

export default ResetButton;