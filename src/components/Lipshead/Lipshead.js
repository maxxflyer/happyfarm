import React, { Component } from 'react'
import Logo from '../Logo/Logo';
import Wing from '../Wing/Wing';
import './css.css';
class Lipshead extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return ( 
        <div id="lipshead" opacity={1.0}>
            <Logo  update={this.props.update}></Logo>
            <Wing update={this.props.update}></Wing>  
        </div>
        );
    }
}
export default Lipshead