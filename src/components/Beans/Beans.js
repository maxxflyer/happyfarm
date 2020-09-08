import React, { Component } from 'react'
import './css.css';


class Beans extends Component {
  
    render(){
        return ( 
            <div>
                <div id="token_panel">

                </div>
        <div id="uniswap_frame_container" >
           <iframe id="uniswap_frame" src="https://uniswap.info/pair/0xe05252ff06de5cf6efc13074072365ce8d64f0d2"></iframe>   
        </div>
        </div>
        );
    }

 
}




export default Beans