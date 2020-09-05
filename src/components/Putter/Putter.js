import React, { Component } from 'react'
import Panel2x1_ from '../panel2x1_/panel2x1_';
import Panel1x2_ from '../panel1x2_/panel1x2_';
import Panel3x1_ from '../panel3x1_/panel3x1_';
import Panel1x3_ from '../panel1x3_/panel1x3_';
import Hwings from '../Hwings/Hwings';
import Vwings from '../Vwings/Vwings';
import './css.css';


class Putter extends React.Component {
    constructor(props) {
        super(props)
      }

     

    render(){
        console.log("PUTTER PROPS> ",this.props); 
        let TagName = Panel1x2_
        if(this.props.layout[0]=="1x2")TagName = Panel1x2_
        if(this.props.layout[0]=="2x1")TagName = Panel2x1_
        if(this.props.layout[0]=="3x1")TagName = Panel3x1_
        if(this.props.layout[0]=="1x3")TagName = Panel1x3_
        if(this.props.layout[0]=="Hwings")TagName = Hwings
        if(this.props.layout[0]=="Vwings")TagName = Vwings
        return (<TagName layout={this.props.layout} layoutBack={this.props.layoutBack} enumBack={this.props.enumBack}></TagName> );
      }


}




export default Putter