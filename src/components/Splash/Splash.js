import React, { Component } from 'react'
import './css.css';


class Splash extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
        <div id="splash_flyer"><div id="Splash_mainlabel">HappyFarm</div>
            <img id="splash_image"  alt="BEANS"  src="https://i.imgur.com/Hs3uInv.png"/>
            <div id="HappyFarm_sublabel">Farming Lambos since 2020</div>
            <input  id="HappyFarm_button" type="button" value="ENTER HAPPY FARM" onClick={() => this.props.update("HappyFarm")}/>
        </div>
        );
    }


}




export default Splash