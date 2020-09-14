import React, { Component } from 'react'
import './css.css';


class Research extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
        <div id="Research_flyer">
             💀
             <div id="Research_title">HappyFarm Res. & Dev.
             </div>
             <div id="Research_mainlabel">This is an ongoing research<br></br>The roadmap is like life: you never know what you find along the way.
             <br></br><br></br>Please follow our run: 
             <br></br>
             </div>
            <div className="Research_sub_label"><input  className="Research_button" type="button" value="🍯 #0 - HappyBasket" onClick={() => this.props.update("DFO")}/></div>
            <div className="Research_sub_desc">Growing a common basket of pools (producing fees) to grow the value of the Org and BEANS 🌱</div>
            <div className="Research_sub_label"><input  className="Research_button" type="button" value="🐈 #1 - HappyProxy" onClick={() => this.props.update("HappyProxy")}/></div>
            <div className="Research_sub_desc">Building a public proxy contract to simplify aggregation of DFOHUB data! 🌈</div>
            <div className="Research_sub_label"><input  className="Research_button" type="button" value="🚜 #2 - Farming Micros" onClick={() => this.props.update("UnderConstruction")}/></div>
            <div className="Research_sub_desc">Building a set of Farming Microservices for individuals and DFOs! 🎠</div>
            <div className="Research_sub_label"><input  className="Research_button" type="button" value="🍀 #3 - Plural Micros" onClick={() => this.props.update("Lottery")}/></div>
            <div className="Research_sub_desc">Researching a collaborative approach to Microservices for VCs and Power Groups! 🎢</div>
            <div className="Research_sub_label"><input  className="Research_button" type="button" value="🌋 #4 - Craft Machine" onClick={() => this.props.update("Math")}/></div>
            <div className="Research_sub_desc">Open crafting tools by HappyFarm DFO! Craft Anything! ⚗️</div>
            <div className="Research_sub_label"><input  className="Research_button" type="button" value="🐄 #5 - HappyEconomy" onClick={() => this.props.update("HappyLand")}/></div>
            <div className="Research_sub_desc">An open virtual economy/world driven by promotional exposure for individual and plural projects! 💣</div>

            <div className="Research_sub_desc"><br></br>Credits:</div> 
            <div className="Research_sub_desc">All Emojis in this space are the Windows standard emoji set and are property of Windows</div> 
        </div>
        );
    }


}




export default Research