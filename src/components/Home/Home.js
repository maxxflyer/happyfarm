import React, { Component } from 'react'
import Lipshead from '../Lipshead/Lipshead';
import Pad from '../Pad/Pad';
import './css.css';


class Home extends Component { 
    constructor(props) {
        super(props)
        this.state = { panel: 'Splash' , token : '0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD' }
    }

    update(panelx,tokenx){
        this.setState({panel:panelx,token:tokenx})
        console.log("!");
     }
   

    render(){ 
        
       
        return (
        <div id="home">
           <Lipshead update={this.update.bind(this)}></Lipshead>
           <Pad stateX={this.state} update={this.update.bind(this)}/>
        </div>);
    }
}


export default Home