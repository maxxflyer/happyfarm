import React, { Component } from 'react'
import './css.css';


class HappyProxy extends Component {
   
    render(){
        console.log(this.props.update) 
        return ( 
        <div id="Proxy_flyer">
             🐈
             <div id="Proxy_title">HappyProxy 
             </div>
             <div id="Proxy_mainlabel">Building a public proxy contract to simplify aggregation of DFOHUB data! 
             </div>
            <div id="Proxy_label">Research #1 - UnderConstruction</div>
        </div>
        );
    }


}




export default HappyProxy