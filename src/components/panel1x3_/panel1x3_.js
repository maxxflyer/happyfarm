import React, { Component } from 'react'
import Selector from '../Selector/Selector';
import Putter from '../Putter/Putter';
import './css.css';


class panel1x3_ extends React.Component {
    constructor(props) {
        super(props)
        console.log("1x3 ------------")
        console.log(props)
        this.selectionL=""
        this.selectionC=""
        this.selectionR=""
        this.ttL='"_1_"'
        this.ttC='"_2_"'
        this.ttR='"_3_"'
      }

      layoutBackL = (l) => {
          console.log("SELECTOR L> "+l)
          this.selectionL=l
          this.layoutBack()
      }  
      layoutBackC = (l) => {
        console.log("SELECTOR C> "+l)
        this.selectionC=l
        this.layoutBack()
      } 
      layoutBackR = (l) => {
        console.log("SELECTOR R> "+l)
        this.selectionR=l
        this.layoutBack()
      } 
      layoutBack = () => {
        let tL=''; if(!this.selectionL)tL=this.ttL
        let tC=''; if(!this.selectionC)tC=this.ttC
        let tR=''; if(!this.selectionR)tR=this.ttR
        console.log("LBACK> ",'[["1x3"],['+tL+this.selectionL+','+tC+this.selectionC+','+tR+this.selectionR+']]')
        this.props.layoutBack('[["1x3"],['+tL+this.selectionL+','+tC+this.selectionC+','+tR+this.selectionR+']]')
      } 

      enumBackL = (v) => {
        this.ttL='"'+v+'"'
        console.log("V",v);
        this.layoutBack()
      }
      enumBackC = (v) => {
        this.ttC='"'+v+'"'
        console.log("V",v);
        this.layoutBack()
      }
      enumBackR = (v) => {
        this.ttR='"'+v+'"'
        console.log("V",v);
        this.layoutBack()
      }

   

    render(){
        console.log("1x3 PROPS> ",this.props);
        return (
        <div className="panel1x3_">
          <div className="row3">
         <ChooseModuleL layout={this.props.layout} layoutBack={this.layoutBackL} enumBack={this.enumBackL}></ChooseModuleL> 
         </div>
         <div className="vsplit">&nbsp;</div>
         <div className="row3">
         <ChooseModuleC layout={this.props.layout} layoutBack={this.layoutBackC} enumBack={this.enumBackC}></ChooseModuleC> 
         </div>
         <div className="vsplit">&nbsp;</div>
         <div className="row3">
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

 function ChooseModuleC (props) {
  console.log("PROPS> ",props)
  let lC=props.layout[1][1]
  console.log("RIGHT> ",lC)
  if(lC.indexOf('_')==0){
    return(<Selector layoutBack={props.layoutBack} enumBack={props.enumBack}></Selector>);
  }else{
    return(<Putter layoutBack={props.layoutBack} layout={lC} enumBack={props.enumBack}></Putter>); 
  }
 }

function ChooseModuleR (props) {
  console.log("PROPS> ",props)
  let lR=props.layout[1][2]
  console.log("RIGHT> ",lR)
  if(lR.indexOf('_')==0){
    return(<Selector layoutBack={props.layoutBack} enumBack={props.enumBack}></Selector>);
  }else{
    return(<Putter layoutBack={props.layoutBack} layout={lR} enumBack={props.enumBack}></Putter>); 
  }
 }


export default panel1x3_