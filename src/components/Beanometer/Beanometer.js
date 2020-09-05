import React, { Component } from 'react'
import './css.css';


class Beanometer extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return ( 
        <div id="flyer"><div id="HappyFarm_mainlabel">Beanometer</div>
         <input  id="gofarm_button" type="button" value="GO FARMING!" onClick={() => this.props.update("HappyFarm")}/>
        </div>
        );
    }


}




export default Beanometer