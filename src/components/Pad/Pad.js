import React, { Component } from 'react'
import Splash from '../Splash/Splash';
import Beanometer from '../Beanometer/Beanometer';
import HappyFarm from '../HappyFarm/HappyFarm';
import Beans from '../Beans/Beans';
import DFO from '../DFO/DFO';
import Instructions from '../Instructions/Instructions';
import Math from '../Math/Math';
import './css.css'; 


class Pad extends Component {
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
       
      if(this.props.panel.panel==="Splash")
        return (
          <div id="superpad">
            <div id="pad">
              <Splash update={this.props.update}></Splash>
            </div>
          </div>
        );
        if(this.props.panel.panel==="Beanometer")
        return (
          <div id="superpad">
            <div id="pad">
              <Beanometer update={this.props.update}></Beanometer>
            </div>           
          </div>
        );
        if(this.props.panel.panel==="HappyFarm")
        return (
          <div id="superpad">
            <div id="pad">
              <HappyFarm update={this.props.update}></HappyFarm>
            </div>           
          </div>
        );
        if(this.props.panel.panel==="Beans")
        return (
          <div id="superpad">
            <div id="beans_pad">
              <Beans update={this.props.update}></Beans>
            </div>           
          </div>
        );
        if(this.props.panel.panel==="DFO")
        return (
          <div id="superpad">
            <div id="DFO_pad">
              <DFO update={this.props.update}></DFO>
            </div>           
          </div>
        );
        if(this.props.panel.panel==="Instructions")
        return (
          <div id="superpad">
            <div id="instructions_pad">
              <Instructions update={this.props.update}></Instructions>
            </div>           
          </div>
        );
        if(this.props.panel.panel==="Math")
        return (
          <div id="superpad">
            <div id="Math_pad">
              <Math update={this.props.update}></Math>
            </div>           
          </div>
        );
        if(this.props.panel.panel==="ID")
        return (
          <div id="superpad">
            <div id="ID_pad">
              <DFO update={this.props.update}></DFO>
            </div>           
          </div>
        );
        if(this.props.panel.panel==="NFT")
        return (
          <div id="superpad">
            <div id="NFT_pad">
              <DFO update={this.props.update}></DFO>
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