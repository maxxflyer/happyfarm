import React, { Component } from 'react'
import './css.css';
class Logo extends Component {
  
    render(){
        return (
        <div id="lips" opacity="1" >
            <img id="lips_logo" src="https://i.imgur.com/BmHURGw.png" alt="happyfarm"   onClick={() => this.props.update("HappyFarm")}/><div id="lips_label">HappyFarm</div><div id="menu_button">MENU</div>
            <div id="lips_menu">
                <div className="menu_row">
                <div className="lips_menu_link lips_dir_button float_left" href="https://dapp.dfohub.com/"    onClick={() => this.props.update("DFO")}>DFO<br></br><img className="lips_dir_icon"  alt="dfo" src="https://i.imgur.com/XYKQ1X5.png"/></div>
                <div className="lips_menu_link lips_dir_button float_left" href="https://dapp.dfohub.com/"    onClick={() => this.props.update("Beanometer")}>ACCOUNT<br></br><img className="lips_dir_icon"  alt="account" src="https://i.imgur.com/mEEm4rN.png"/></div>
                <div className="lips_menu_link lips_dir_button float_left" href="https://uniswap.info/token/0x801f90f81786dc72b4b9d51ab613fbe99e5e4ccd"   onClick={() => this.props.update("Beans")}>TOKEN<br></br><img className="lips_dir_icon"  alt="token" src="https://i.imgur.com/dcCX1vC.png"/></div>
                <div className="lips_menu_link lips_dir_button float_left" href="https://dapp.dfohub.com/"   onClick={() => this.props.update("HappyFarm")}>FARM<br></br><img className="lips_dir_icon"  alt="farm" src="https://i.imgur.com/YAqCUoc.png"/></div>
                <div className="lips_menu_link lips_dir_button float_left" href="https://dapp.dfohub.com/"   onClick={() => this.props.update("HappyLand")}>LAND<br></br><img className="lips_dir_icon" alt="happyland" src="https://i.imgur.com/nFrikCS.png"/></div>
                <div className="lips_menu_link lips_dir_button float_left" href="https://dapp.dfohub.com/"   onClick={() => this.props.update("Instructions")}>HOW TO<br></br><img className="lips_dir_icon" alt="instructions" src="https://i.imgur.com/wlum6zh.png"/></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://docs.google.com/document/d/1r-wu8k9opLyIg3FW6HEFQ9aYl5X6oFi8-VZsTjHR0tA/edit?usp=sharing" rel="noopener noreferrer" target="_blank">PAPER<br></br><img className="lips_dir_icon" alt="paper" src="https://i.imgur.com/pOEwIJ5.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://github.com/maxxflyer/happyfarm/blob/master/README.md" target="_blank" rel="noopener noreferrer">GITHUB<br></br><img className="lips_dir_icon" alt="github" src="https://i.imgur.com/Roc9b0U.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://t.me/joinchat/F1MMkRlZ2sosNU5gcz32-g" target="_blank" rel="noopener noreferrer">TELEGRAM<br></br><img className="lips_dir_icon" alt="telegram" src="https://i.imgur.com/6Nkdu3P.png"/></a></div>
                <div><a className="lips_menu_link lips_dir_button float_right" href="https://twitter.com/maxxflyer" target="_blank" rel="noopener noreferrer">TWITTER<br></br><img  alt="twitter" className="lips_dir_icon" src="https://i.imgur.com/WCPB544.png"/></a></div>
                  <div><a className="lips_menu_link lips_dir_button float_right" href="https://discord.gg/F3Cqksx" target="_blank" rel="noopener noreferrer">DISCORD<br></br><img alt="discord" className="lips_dir_icon" src="https://i.imgur.com/tZbrqGS.png"/></a></div>
                </div>
            </div>
        </div>
        );
    }
}
export default Logo