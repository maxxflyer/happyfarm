import React, { Component } from 'react'
import './css.css';


class Math extends Component {

    render(){
        console.log(this.props.update) 
        return ( 
            <div id="Math_panel">
            <div id="Math_mainlabel"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🥗</span> Recipies</div>
            <div className="Equation">
                <div className="Math_image"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">💩</span></div>
                <div className="Math_label"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐄+🌾=💩</span></div>
                <div className="clear"></div>
            </div>
            <div className="Equation">
                <div className="Math_image"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌾</span></div>
                <div className="Math_label"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">⛰️+🌾=🌾</span></div>
                <div className="clear"></div>
            </div>
            <div className="Equation">
                <div className="Math_image"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌾</span></div>
                <div className="Math_label"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">⛰️+🌾+💩=🌾🌾</span></div>
                <div className="clear"></div>
            </div>
            <div className="Equation">
                <div className="Math_image"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span></div>
                <div className="Math_label"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">⛰️+🌱=🌱</span></div>
                <div className="clear"></div>
            </div>
            <div className="Equation">
                <div className="Math_image"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span></div>
                <div className="Math_label"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">⛰️+🌱+💩=🌱🌱</span></div>
                <div className="clear"></div>
            </div>
                 </div>
            
        );
    }


}




export default Math