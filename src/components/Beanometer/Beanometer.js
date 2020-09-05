import React, { Component } from 'react'
import './css.css';


class Beanometer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return ( 
        <div id="flyer"><div id="HappyFarm_mainlabel">Beanometer</div>
        <img id="beanstalk" src="https://i.imgur.com/n1NsRd8.png"/>
         <input  id="gofarm_button" type="button" value="GO FARMING!" onClick={() => this.props.update("HappyFarm")}/>
        </div>
        );
    }


}




export default Beanometer