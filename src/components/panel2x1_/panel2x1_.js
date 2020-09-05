import React, { Component } from 'react'
import Selector from '../Selector/Selector';
import Putter from '../Putter/Putter';
import './css.css';


class panel2x1_ extends React.Component {
    constructor(props) {
        super(props)
        console.log("2x1 ------------")
        console.log(props)
        this.selectionL=""
        this.selectionR=""
        this.ttL='"_1_"'
        this.ttR='"_2_"'
      }

      layoutBackL = (l) => {
          console.log("SELECTOR L> "+l)
          this.selectionL=l
          this.layoutBack()
      }  
      layoutBackR = (l) => {
        console.log("SELECTOR R> "+l)
        this.selectionR=l
        this.layoutBack()
      } 
      layoutBack = () => {
        let tL=''; if(!this.selectionL)tL=this.ttL
        let tR=''; if(!this.selectionR)tR=this.ttR
        console.log("LBACK> ",'[["2x1"],['+tL+this.selectionL+','+tR+this.selectionR+']]')
        this.props.layoutBack('[["2x1"],['+tL+this.selectionL+','+tR+this.selectionR+']]')
      } 

      enumBackL = (v) => {
        this.ttL='"'+v+'"'
        console.log("V",v);
        this.layoutBack()
      }
      enumBackR = (v) => {
        this.ttR='"'+v+'"'
        console.log("V",v);
        this.layoutBack()
      }

   

    render(){
        console.log("2x1 PROPS> ",this.props);
        return (
        <div className="panel2x1_">
          <div className="column">
         <ChooseModuleL layout={this.props.layout} layoutBack={this.layoutBackL} enumBack={this.enumBackL}></ChooseModuleL> 
         </div>
         <div className="hsplit">&nbsp;</div>
         <div className="column">
         <ChooseModuleR layout={this.props.layout} layoutBack={this.layoutBackR} enumBack={this.enumBackR}></ChooseModuleR> 
         </div>
        </div>);
    }


}


function ChooseModuleL (props) {
  console.log("PROPS> ",props)
  let lL=props.layout[1][0]
  console.log("LEFT> ",lL)

  if(lL.indexOf('_')==0){
    return(<Selector layoutBack={props.layoutBack} enumBack={props.enumBack}></Selector>);
  }else{
    return(<Putter layoutBack={props.layoutBack} layout={lL} enumBack={props.enumBack}></Putter>); 
  }
 }

function ChooseModuleR (props) {
  console.log("PROPS> ",props)
  let lR=props.layout[1][1]
  console.log("RIGHT> ",lR)
  if(lR.indexOf('_')==0){
    return(<Selector layoutBack={props.layoutBack} enumBack={props.enumBack}></Selector>);
  }else{
    return(<Putter layoutBack={props.layoutBack} layout={lR} enumBack={props.enumBack}></Putter>); 
  }
 }


export default panel2x1_