import React, { Component } from 'react'
import './css.css'; 

class Console extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){        
          return (
              <div id="console">
                <div id="console_content">{this.renderLayoutString(this.props)}</div>
                <div id="openLayout" onClick={() => {this.jump(this.props)}}>VIEW</div>
              </div> 
          );       
    }

    jump = (prp) => {
      console.log("!")
      return(
        window.open('http://localhost:3001/?addr=0x2B9C770Ee37b9193faac8fBFc4b78635DdedB175&layout=[["pad"],'+JSON.stringify(prp.layout).split('"_').join("{").split('_"').join("}")+']')
      );
    }

    renderLayoutString = (prp) => {
      return ('[["pad"],'+JSON.stringify(prp.layout).split('"_').join("{").split('_"').join("}"))+']';
    }

}

export default Console