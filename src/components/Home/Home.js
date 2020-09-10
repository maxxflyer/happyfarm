import React, { Component } from 'react'
import Lipshead from '../Lipshead/Lipshead';
import Pad from '../Pad/Pad';
import './css.css';


class Home extends Component { 
    constructor(props) {
        super(props)
        this.state = { panel: 'Splash' }
    }

    update(panelx){
        this.setState({panel:panelx})
        console.log("!");
     }
   

    render(){ 
        
       
        return (
        <div id="home">
           <Lipshead update={this.update.bind(this)}></Lipshead>
           <Pad panel={this.state} update={this.update.bind(this)}/>
        </div>);
    }
}


export default Home