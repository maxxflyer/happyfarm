import React, { Component } from 'react'
import HappyFarm from '../HappyFarm/HappyFarm';
import './css.css'; 


class Pad extends React.Component {
    constructor() {
        super()
        this.state = {
          layout: "_1_"
        }
      }

    layoutBack = (l) => {
        this.setState({
            layout : JSON.parse(l)
        })     
    }  

    enumBack = (e) => {
        this.setState({ layout : e })
    }
   

    render(){   
        return (
          <div id="superpad">
            <div id="pad">
              <HappyFarm></HappyFarm>
            </div>
            
          </div>
        );
    }

    jump = () => {
      return(
        window.open('[["pad"],'+JSON.stringify(this.state.layout).split('"_').join("{").split('_"').join("}")+']')
      );
    }

    renderLayoutString = () => {
      return ('[["pad"],'+JSON.stringify(this.state.layout).split('"_').join("{").split('_"').join("}"))+']';
    }

}



/*

import Panel2x1_ from '../panel2x1_/panel2x1_';
import Panel1x2_ from '../panel1x2_/panel1x2_';
import Panel3x1_ from '../panel3x1_/panel3x1_';
import Panel1x3_ from '../panel1x3_/panel1x3_';
import Hwings from '../Hwings/Hwings';
import Vwings from '../Vwings/Vwings';

      if(this.state.layout[0]=="1x2"){return (<div id="superpad"><div id="pad"><Panel1x2_ layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Panel1x2_></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
        </div>);}
      if(this.state.layout[0]=="3x1"){return (<div id="superpad"><div id="pad"><Panel3x1_ layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Panel3x1_></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
        </div>);}
      if(this.state.layout[0]=="1x3"){return (<div id="superpad"><div id="pad"><Panel1x3_ layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Panel1x3_></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
         </div>);}
      if(this.state.layout[0]=="Hwings"){return (<div id="superpad"><div id="pad"><Hwings layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Hwings></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
         </div>);}
      if(this.state.layout[0]=="Vwings"){return (<div id="superpad"><div id="pad"><Vwings layoutBack={this.layoutBack} enumBack={this.enumBack} layout={this.state.layout}></Vwings></div><div id="console"><div id="console_content">{this.renderLayoutString()}</div><div id="openLayout" onClick={() => {this.jump()}}>VIEW</div></div> 
      </div>);}
*/


export default Pad