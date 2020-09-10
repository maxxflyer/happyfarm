import React, { Component } from 'react'
import './css.css';


class Math extends Component {
   constructor(props){
       super(props)
   }
    render(){
        console.log(this.props.update) 
        return ( 
            <div id="Math_panel">
            <div id="Math_mainlabel">🥗 Recipies</div>
            <div className="Equation">
                <div className="Math_image">💩</div>
                <div className="Math_label">🐄+🌾=💩</div>
                <div className="clear"></div>
            </div>
            <div className="Equation">
                <div className="Math_image">🌾</div>
                <div className="Math_label">⛰️+🌾=🌾</div>
                <div className="clear"></div>
            </div>
            <div className="Equation">
                <div className="Math_image">🌾</div>
                <div className="Math_label">⛰️+🌾+💩=🌾🌾</div>
                <div className="clear"></div>
            </div>
            <div className="Equation">
                <div className="Math_image">🌱</div>
                <div className="Math_label">⛰️+🌱=🌱</div>
                <div className="clear"></div>
            </div>
            <div className="Equation">
                <div className="Math_image">🌱</div>
                <div className="Math_label">⛰️+🌱+💩=🌱🌱</div>
                <div className="clear"></div>
            </div>
                 </div>
            
        );
    }


}




export default Math