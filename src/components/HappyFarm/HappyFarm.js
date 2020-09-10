import React, { Component } from 'react'
import Web3 from 'web3'
import './css.css';


class HappyFarm extends Component {
    constructor(props){
        super(props)
    }


    componentDidMount() {
        this.loadBlockchainData()
    }
    
    
        async loadBlockchainData() {
            window.ethereum.enable().then(async function (accounts) {   
                const beans = new web3.eth.Contract(ABI, BEANS) 
                    let supply = await beans.methods.balanceOf(accounts[0]).call()/1000000000000000000   
                    let supstr=supply.toString()
                    supstr=supstr.substring(0,supstr.indexOf(".")+3)                                  
                    document.getElementById("beans_amount").innerHTML=supstr;

                    const usd = new web3.eth.Contract(ABI, uSD);
                    let supply2 = await usd.methods.balanceOf(accounts[0]).call()/1000000000000000000   
                    let supstr2=supply2.toString()
                    supstr2=supstr2.substring(0,supstr2.indexOf(".")+3)                                  
                    document.getElementById("usd_amount").innerHTML=supstr2;

                    const arte = new web3.eth.Contract(ABI, UNIFI);
                    let supply3 = await arte.methods.balanceOf(accounts[0]).call()/1000000000000000000   
                    let supstr3=supply3.toString()
                    supstr3=supstr3.substring(0,supstr3.indexOf(".")+3)                                  
                    document.getElementById("arte_amount").innerHTML=supstr3;

                    const unifi = new web3.eth.Contract(ABI, ARTE);
                    let supply4 = await unifi.methods.balanceOf(accounts[0]).call()/1000000000000000000   
                    let supstr4=supply4.toString()
                    supstr4=supstr4.substring(0,supstr4.indexOf(".")+3)                                 
                    document.getElementById("unifi_amount").innerHTML=supstr4;

                   
                    const eth = await web3.eth.getBalance(accounts[0])/1000000000000000000
                    let supstr5=eth.toString()
                    supstr5=supstr5.substring(0,supstr5.indexOf(".")+3)                                 
                    document.getElementById("eth_amount").innerHTML=supstr5;


            })
        }

    render(){
        return ( 
        <div>
            <div id="instafarm_panel">
            <div className="clickable" onClick={() => window.open("https://www.unifihub.com/")}>🦍 InstaFarm!</div>
                    <div id="instafarm_board">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                    Under Construction!
                    </div>
            </div>
                <div id="happy_flyer">
                    
                    <div id="HappyFarm_mainlabel">🌾 Farming 🌾</div>
               
                <div id="mainpanel">
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">+🌱=🌱</div>
                            <img className="offer_icon" src="https://www.unifihub.com/assets/img/m4.png"/>
                        </div>
                    </div>
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">+🌱=🌱</div>
                            <img className="offer_icon" src="https://i.imgur.com/fYu1egI.png"/>
                        </div>
                    </div>
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">+🌱=🌱</div>
                            <img className="offer_icon" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"/>
                        </div>
                    </div>
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">+🌱=🌱</div>
                            <img className="offer_icon" src="https://i.imgur.com/FPL7c5a.png"/>
                        </div>
                    </div>
                    <div id="farm_offer_disabled">
                        <div id="farm_offer_icons">
                        <img className="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">🐄+🌾=💩</div>
                        </div>
                    </div>
                    <div id="farm_offer_disabled">
                        <div id="farm_offer_icons">
                        <img className="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">💩+🌱=🌱</div>
                        </div>
                    </div>
                    <div id="farm_offer_disabled">
                        <div id="farm_offer_icons">
                        <img className="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">+🌱+💩=🌱🌱</div>
                            <img className="offer_icon" src="https://i.imgur.com/FPL7c5a.png"/>
                        </div>
                    </div>
                    
                    <br></br>
                    <div className="descr_container">
                    <div className="descr_title">HOW TO FARM Beans🌱:</div>
                    <div className="descr">1) Connect to DFOHUB at <a href="https://dapp.dfohub.com" target="_blank">dapp.dfohub.com</a></div>
                    <div className="descr">2) Enter HappyFarm</div>
                    <div className="descr">3) Select Menu DEFI</div>
                    <div className="descr">4) Select Menu FARMING</div>
                    <div className="descr">5) Choose your favorite pair and add it in the suggested proportions (Stake)</div>
                    <div className="descr">6) You are ready to farm Beans🌱</div>
                    <div className="descr_min">🌷<i> more pairs/offers will be added later</i></div>
                    <br></br>
                    <div className="descr_min">HappyFarm! Farming together the Farm of the future!</div>

                    </div>
                    <div className="descr_container_dark">
                    <div className="mini_descr">Beans🌱 are equities of HappyFarm DFO</div>
                    <div className="mini_descr">Paper: <a href="https://cdn.discordapp.com/attachments/751252665085984882/751253034906026126/HAPPYFARM.pdf" target="_blank">Short Paper</a></div>
                    <div className="mini_descr">Beans🌱: <a href="https://uniswap.info/token/0x801f90f81786dc72b4b9d51ab613fbe99e5e4ccd" target="_blank">UNISWAP</a></div>
                    <div className="mini_descr">🚜HappyFarm is an ongoing R&D project (<a href="https://t.me/joinchat/F1MMkRlZ2sosNU5gcz32-g" target="_blank">Telegram</a>)</div>

                    </div>
                </div>
                </div>
                <div id="wallet_panel">
                    <div className="clickable" onClick={() => this.props.update("Beanometer")}>Wallet 👛 </div>
                    <div id="wallet_board">
                        <div id="inner_wallet_board">
                            <div className="wallet_column">
                                <div className="wallet_token"  onClick={() => this.props.update("Beans")}><img className="wallet_token_icon" src="https://i.imgur.com/8qU1rji.png"></img><div className="wallet_amount_label" id="beans_amount">0.00</div></div>
                                <div className="wallet_token"><a href="https://etherscan.io/token/0x44086035439E676c02D411880FcCb9837CE37c57" target="_blank"><img className="wallet_token_icon" src="https://www.unifihub.com/assets/img/m4.png"></img></a><div className="wallet_amount_label" id="usd_amount">0.00</div></div>
                                <div className="wallet_token"><a href="https://etherscan.io/token/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5" target="_blank"><img className="wallet_token_icon" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"></img></a><div className="wallet_amount_label" id="unifi_amount">0.00</div></div>
                                <div className="wallet_token"><a href="https://etherscan.io/token/0x34612903Db071e888a4dADcaA416d3EE263a87b9" target="_blank"><img className="wallet_token_icon" src="https://i.imgur.com/fYu1egI.png"></img></a><div className="wallet_amount_label" id="arte_amount">0.00</div></div>
                               <div className="wallet_token"><a href="https://etherscan.io/" target="_blank"><img className="wallet_token_icon" src="https://i.imgur.com/FPL7c5a.png"></img></a><div className="wallet_amount_label" id="eth_amount">0.00</div></div>
                            </div>  
                            <div className="wallet_column">
                                <div className="wallet_token "  onClick={() => this.props.update("Beans")}><div className="wallet_icon">🌾</div><div className="wallet_amount_label" id="beans_amount">0.00</div></div>
                                <div className="wallet_token"  onClick={() => this.props.update("Beans")}><div className="wallet_icon">🐄</div><div className="wallet_amount_label" id="beans_amount">0</div></div>
                                <div className="wallet_token"  onClick={() => this.props.update("Beans")}><div className="wallet_icon">💩</div><div className="wallet_amount_label" id="beans_amount">0.00</div></div>
                            </div>  
                        </div>
                    </div>
                    <div id="control_panel">
                        <div className="clickable" onClick={() => window.open("https://www.dfohub.com/")}>Control 🌷</div>
                        <div id="control_board">
                           <input type="button" className="control_button" value="🌈 INSTRUCTIONS"  onClick={() => this.props.update("Instructions")}></input>
                           <input type="button" className="control_button" value="🚜 DFO"  onClick={() => this.props.update("DFO")}></input>
                           <input type="button" className="control_button" value="👻 ACCOUNT"  onClick={() => this.props.update("Beanometer")}></input>
                           <input type="button" className="control_button" value="🥗 RECIPIES"  onClick={() => this.props.update("Math")}></input>
                           <input type="button" className="control_button" value="💀 ..."></input>
                        </div>
                        </div>
                </div>
        </div>
        );
    }


}


        let ABI=[{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"checkOnERC721Received","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"forAll","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseApprovalEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseTransferEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        let BEANS="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD"
        let uSD="0x44086035439E676c02D411880FcCb9837CE37c57"
        let UNIFI="0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5"
        let ARTE="0x34612903Db071e888a4dADcaA416d3EE263a87b9"

        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")


        function jump2(){
            window.open("https://dapp.dfohub.com/?addr=0x703De1282c0390Eb6AF741Ac6A5C8eF88161cae3")
          }

export default HappyFarm