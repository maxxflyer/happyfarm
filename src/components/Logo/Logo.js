import React, { Component } from 'react'
import './css.css';
class Logo extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
        <div id="lips" opacity="1" >
            <img id="lips_logo" src="https://i.imgur.com/BmHURGw.png" alt="happyfarm" /><div id="lips_label">HappyFarm</div>
            <div id="lips_menu">
                <div className="menu_row">
                <div><a className="lips_menu_link lips_dir_button float_left" href="https://dapp.dfohub.com/" target="_blank">DFO<br></br><img className="lips_dir_icon" src="https://i.imgur.com/XYKQ1X5.png"/></a></div>
                <div className="lips_menu_link lips_dir_button float_left" href="https://dapp.dfohub.com/"   onClick={() => this.props.update("HappyFarm")}>FARM<br></br><img className="lips_dir_icon" src="https://i.imgur.com/dcCX1vC.png"/></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://docs.google.com/document/d/1r-wu8k9opLyIg3FW6HEFQ9aYl5X6oFi8-VZsTjHR0tA/edit?usp=sharing" target="_blank">PAPER<br></br><img className="lips_dir_icon" src="https://i.imgur.com/pOEwIJ5.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://github.com/maxxflyer/happyfarm/blob/master/README.md" target="_blank">GITHUB<br></br><img className="lips_dir_icon" src="https://i.imgur.com/Roc9b0U.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="" target="_blank">TWITTER<br></br><img className="lips_dir_icon" src="https://i.imgur.com/WCPB544.png"/></a></div>
                  <div><a className="lips_menu_link lips_dir_button float_right" href="https://discord.gg/F3Cqksx" target="_blank">DISCORD<br></br><img className="lips_dir_icon" src="https://i.imgur.com/tZbrqGS.png"/></a></div>
                </div>
            </div>
        </div>
        );
    }
}
export default Logo