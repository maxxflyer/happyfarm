import React, { Component } from 'react'
import Splash from '../Splash/Splash';
import Beanometer from '../Beanometer/Beanometer';
import HappyFarm from '../HappyFarm/HappyFarm';
import Beans from '../Beans/Beans';
import DFO from '../DFO/DFO';
import Instructions from '../Instructions/Instructions';
import Avatar from '../Avatar/Avatar';
import HappyLand from '../HappyLand/HappyLand';
import Math from '../Math/Math';
import Token from '../Token/Token';
import HappyProxy from '../HappyProxy/HappyProxy';
import Research from '../Research/Research';

import Lottery from '../Lottery/Lottery';
import UnderConstruction from '../UnderConstruction/UnderConstruction';
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
      if(this.props.stateX.panel==="UnderConstruction")
      return (
        <div id="superpad">
          <div id="pad">
            <UnderConstruction update={this.props.update}></UnderConstruction>
          </div>
        </div>
      );
      if(this.props.stateX.panel==="Splash")
        return (
          <div id="superpad">
            <div id="pad">
              <Splash update={this.props.update}></Splash>
            </div>
          </div>
        );
        if(this.props.stateX.panel==="Beanometer")
        return (
          <div id="superpad">
            <div id="pad">
              <Beanometer update={this.props.update}></Beanometer>
            </div>           
          </div>
        );
        if(this.props.stateX.panel==="HappyFarm")
        return (
          <div id="superpad">
            <div id="pad">
              <HappyFarm update={this.props.update}></HappyFarm>
            </div>           
          </div>
        );
        if(this.props.stateX.panel==="Beans")
        return (
          <div id="superpad">
            <div id="beans_pad">
              <Beans update={this.props.update}></Beans>
            </div>           
          </div>
        );
        if(this.props.stateX.panel==="DFO")
        return (
          <div id="superpad">
            <div id="DFO_pad">
              <DFO update={this.props.update}></DFO>
            </div>           
          </div>
        );
        if(this.props.stateX.panel==="Instructions")
        return (
          <div id="superpad">
            <div id="instructions_pad">
              <Instructions update={this.props.update}></Instructions>
            </div>           
          </div>
        );
        if(this.props.stateX.panel==="Math")
        return (
          <div id="superpad">
            <div id="Math_pad">
              <Math update={this.props.update}></Math>
            </div>           
          </div>
        );
        if(this.props.stateX.panel==="Avatar")
        return (
          <div id="superpad">
            <div id="Avatar_pad">
              
              <Avatar update={this.props.update}></Avatar>
            </div>           
          </div>
        );
        if(this.props.stateX.panel==="Token"){
        window.history.pushState('token_page', 'Token Display', '/?token='+this.props.stateX.token);
        return (
          <div id="superpad">
            <div id="pad">
              <Token update={this.props.update} token={this.props.stateX.token}></Token>
            </div>           
          </div>
        );}

        if(this.props.stateX.panel==="HappyLand"){
          window.history.pushState('token_page', 'Token Display', '/?token='+this.props.stateX.token);
          return (
            <div id="superpad">
              <div id="pad">
                <HappyLand update={this.props.update}></HappyLand>
              </div>           
            </div>
          );}
          if(this.props.stateX.panel==="Lottery"){
            return (
              <div id="superpad">
                <div id="pad">
                  <Lottery update={this.props.update}></Lottery>
                </div>           
              </div>
            );}
            if(this.props.stateX.panel==="HappyProxy"){
              return (
                <div id="superpad">
                  <div id="pad">
                    <HappyProxy update={this.props.update}></HappyProxy>
                  </div>           
                </div>
              );}
              if(this.props.stateX.panel==="Research"){
                return (
                  <div id="superpad">
                    <div id="pad">
                      <Research update={this.props.update}></Research>
                    </div>           
                  </div>
                );}
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