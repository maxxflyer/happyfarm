import React, { Component } from 'react'
import Lipshead from '../Lipshead/Lipshead';
import Pad from '../Pad/Pad';
import './css.css';


class Home extends React.Component { 
    

       
   

    render(){ 
        
       
        return (
        <div id="home">
           <Lipshead></Lipshead>
           <Pad/>
        </div>);
    }


}


export default Home