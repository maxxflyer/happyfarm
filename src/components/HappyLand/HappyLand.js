import React, { Component } from 'react'
import './css.css';


class HappyLand extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
            <div id="HappyLand_panel">
                <div id="HappyLand_left_column">
                <div className="HappyLand_menu">instructions: 🌈</div>
            <div className="HappyLand_menu">charts: 💸</div>
            <div className="HappyLand_menu">create: 💎</div>
                </div>
        <div id="HappyLand_flyer">
              <div id="HappyLand_image_panel"><img id="HappyLand_image" src="https://i.imgur.com/9Qvpu4g.png"></img></div>
            <div id="HappyLand_mainlabel">HappyLand</div>
        </div>
        <div id="HappyLand_right_column">
            <div className="HappyLand_menu">🦄 citizens: 0</div>
            <div className="HappyLand_menu">⛰️ lands: 0</div>
            <div className="HappyLand_menu">🎢 economies: 0</div>
        </div>
        <div className="clear"/>
        <div id="HappyLand_label">An experimental economy where anyone can create entities and add them to an Artificial Life oriented ecosystem.<br></br><br></br><i>Under Construction!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i></div>
        <div id="HappyLand_map">
            <div id="HappyLand_map_panel">
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>

                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>

                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>

                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>

                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>

                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
                <div className="land"></div>
            </div>
        </div>
        </div>
        );
    }


}




export default HappyLand