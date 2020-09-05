import React, { Component } from 'react'
import './css.css';


class HappyFarm extends Component {
  
    render(){
        return ( 
        <div id="flyer"><div id="HappyFarm_mainlabel">HappyFarm</div>
            <img id="splash_image" src="https://i.imgur.com/Hs3uInv.png"/>
            <div id="HappyFarm_sublabel">Farming Lambos since 2020</div>
            <input  id="HappyFarm_button" type="button" value="ENTER HAPPY FARM"/>
        </div>
        );
    }


}




export default HappyFarm