import React, { Component } from 'react'
import './css.css';
class Logo extends Component {
    render(){
        return (
        <div id="lips" opacity="1" >
            <img id="lips_logo" src="./HappyFarm.png" alt="Lips" /><div id="lips_label">HappyFarm</div>
            <div id="lips_menu">
                <div className="menu_row">
                <div><a className="lips_menu_link lips_dir_button float_left" href="https://dapp.dfohub.com/" target="_blank">DFO<br></br><img className="lips_dir_icon" src="./ghost.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://docs.google.com/document/d/1r-wu8k9opLyIg3FW6HEFQ9aYl5X6oFi8-VZsTjHR0tA/edit?usp=sharing" target="_blank">PAPER<br></br><img className="lips_dir_icon" src="./menubean.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://github.com/maxxflyer/happyfarm/blob/master/README.md" target="_blank">GITHUB<br></br><img className="lips_dir_icon" src="./lips_github.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="" target="_blank">TWITTER<br></br><img className="lips_dir_icon" src="./twitter.png"/></a></div>
                  <div><a className="lips_menu_link lips_dir_button float_right" href="https://discord.gg/F3Cqksx" target="_blank">DISCORD<br></br><img className="lips_dir_icon" src="./Discord logo.png"/></a></div>
                </div>
            </div>
        </div>
        );
    }
}
export default Logo