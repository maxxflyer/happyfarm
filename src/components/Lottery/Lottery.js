import React, { Component } from 'react'
import './css.css';


class Lottery extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
        <div id="Lottery_flyer">
             🍀
             <div id="Lottery_mainlabel">A collaborative no-profit Lottery any Project/DFO can join to gain visibility and to promote staking of a token!
             <input  className="Lottery_button" type="button" value="PLAY LOTTERY 🍺" onClick={() => this.props.update("UnderConstruction")}/>
             <input  className="Lottery_button" type="button" value="👻 DFO INSTALL" onClick={() => this.props.update("UnderConstruction")}/>
             </div>
            <div id="Lottery_label">Research #3 - UnderConstruction</div>
        </div>
        );
    }


}




export default Lottery