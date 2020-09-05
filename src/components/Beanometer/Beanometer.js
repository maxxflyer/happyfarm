import React, { Component } from 'react'
import './css.css';


class Beanometer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return ( 
        <div id="flyer">
        <div id="beanstalk_mainlabel">Beanometer</div>
        <img id="beanstalk_scale" src="https://i.imgur.com/NtMRRJC.png"/>
        <img id="beanstalk_back" src="https://i.imgur.com/04NXApT.png"/>
        <div id="frame_beanstalk">
            <img id="beanstalk" src="https://i.imgur.com/n1NsRd8.png"/>
            <div id="pointer_mainlabel">◄ 0 Beans</div>
        </div>
         <input  id="gofarm_button" type="button" value="GO FARMING!" onClick={() => this.props.update("HappyFarm")}/>
        </div>
        );
    }


}




export default Beanometer