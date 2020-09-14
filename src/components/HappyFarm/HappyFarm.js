import React, { Component } from 'react'
import Web3 from 'web3'
import './css.css';


class HappyFarm extends Component {
  


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
            <div id="left_panel">
            <div id="lottery_panel">
            <div className="clickable" onClick={() => window.open("https://www.unifihub.com/")}><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🍀</span> HappyLottery</div>
                    <div className="board">
                    <span id="lottery_image" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span><br></br>
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">Stake 1 🌱 for 1 week<br></br>win up to 1 🌱<br></br>🌳(fee: 0% - %1/256)🌳</span><br></br>
                   
                    <br></br>
                        <input id="lottery_button" type="button" value="🍻 Play"  onClick={() => this.props.update("Lottery")}></input>
                    </div>
            </div>
            <div id="instafarm_panel">
            <div className="clickable" onClick={() => window.open("https://www.unifihub.com/")}><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🦍</span> InstaFarm!</div>
                    <div className="board">
                        <br></br><br></br><br></br><br></br>    
                        Under Construction!
                    </div>
            </div>
            </div>
                <div id="happy_flyer">
                    
                    <div id="HappyFarm_mainlabel"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌾</span> Farming <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌾</span></div>
                    <div id="HappyFarm_filters">filter: <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🚜 </span> <span className="happy_filters_disabled" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🎩 👻</span></div>
               
                <div id="mainpanel">
                    <div id="farm_offer">
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">+🌱=🌱</span></div>
                            <img className="offer_icon"   alt="offer_icon" src="https://www.unifihub.com/assets/img/m4.png"/>
                        </div>
                        <div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">100🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">73🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">3 Months</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 100%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon"  src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">+<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱=🌱</span></div>
                            <img className="offer_icon"alt="offer_icon" src="https://i.imgur.com/fYu1egI.png"/>
                        </div>
                        <div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">100🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">68🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">6 Months</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 100%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon"  src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">+<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱=🌱</span></div>
                            <img className="offer_icon"alt="offer_icon" src="https://i.imgur.com/fYu1egI.png"/>
                        </div>
                        <div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">100🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">100🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">1 Year</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 120%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon"  src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward">+<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱=🌱</span></div>
                            <img className="offer_icon"alt="offer_icon" src="https://i.imgur.com/fYu1egI.png"/>
                        </div>
                        <div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">50🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">50🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">2 Years</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 250%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon"  src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">+🌱=🌱</span></div>
                            <img className="offer_icon" alt="offer_icon" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"/>
                        </div>
                        <div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">32🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">68🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">6 Months</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 100%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon"  src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">+🌱=🌱</span></div>
                            <img className="offer_icon" alt="offer_icon" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"/>
                        </div>
                        <div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">100🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">100🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">1 Year</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 120%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon"  src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">+🌱=🌱</span></div>
                            <img className="offer_icon" alt="offer_icon" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"/>
                        </div>
                        <div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">50🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">50🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">2 Years</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 250%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon"  src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">+🌱=🌱</span></div>
                            <img className="offer_icon" alt="offer_icon" src="https://i.imgur.com/FPL7c5a.png"/>
                        </div><div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">32🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">68🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">6 Months</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 100%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon"  src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">+🌱=🌱</span></div>
                            <img className="offer_icon" alt="offer_icon" src="https://i.imgur.com/FPL7c5a.png"/>
                        </div><div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">100🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">100🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">1 Year</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 120%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    
                    <div id="farm_offer" onClick={() => jump2()}>
                        <div id="farm_offer_icons">
                        <img className="farm_icon"  alt="farm_icon"  src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">+🌱=🌱</span></div>
                            <img className="offer_icon" alt="offer_icon" src="https://i.imgur.com/FPL7c5a.png"/>
                        </div><div className="farm_offer_stats">
                            <div className="stats minStake">🎯 min Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">0.1🌱</span></div>
                            <div className="stats maxStake">🐳 max Stake: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">50🌱</span></div>
                            <div className="stats forFarming">🎩 Farmable: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">50🌱</span></div>
                            <div className="stats forTimeline">🗻 Timeline: <span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">2 Years</span></div>
                        </div>
                        <div className="stats_right_reward forReward"><span className="emoji_right" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🏆 250%</span></div>
                        <input type="button" className="sf_button" value="🐘+🚜 stake+farm" onClick={() => jump2()}></input>
                    </div>
                    <div id="farm_offer_disabled">
                        <div id="farm_offer_icons">
                        <img className="farm_icon"   alt="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐄+🌾=💩</span></div>
                        </div>
                    </div>
                    <div id="farm_offer_disabled">
                        <div id="farm_offer_icons">
                        <img className="farm_icon"   alt="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">💩+🌱=🌱</span></div>
                        </div>
                    </div>
                    <div id="farm_offer_disabled">
                        <div id="farm_offer_icons">
                        <img className="farm_icon"   alt="farm_icon" src="https://i.imgur.com/BmHURGw.png"/>
                        </div>
                        <div id="farm_offer_farm">
                        HappyFarm
                        </div>
                        <div id="farm_offer_logic">
                            <div className="reward"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">+🌱+💩=🌱🌱</span></div>
                            <img className="offer_icon" alt="offer_icon" src="https://i.imgur.com/FPL7c5a.png"/>
                        </div>
                    </div>
                    
                   
                    <div className="descr_container">
                    <div className="descr_title">HOW TO FARM Beans<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span>:</div>
                    <div className="descr">1) Choose an offer you like</div>
                    <div className="descr">2) Enter HappyFarm</div>
                    <div className="descr">3) Select Menu DEFI</div>
                    <div className="descr">4) Select Menu FARMING</div>
                    <div className="descr">5) Choose your favorite pair and add it in the suggested proportions (click: Stake)</div>
                    <div className="descr">6) You are ready to farm Beans<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span></div>
                    <div className="descr_min"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌷</span><i> more pairs/offers will be added later</i></div>
                    <br></br>
                    <div className="descr_min">HappyFarm! Farming together the Farm of the future!</div>

                    </div>
                    <div className="descr_container">
                    <div className="mini_descr">Beans<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span> are equities of HappyFarm DFO</div>
                    <div className="mini_descr">Paper: <a href="https://cdn.discordapp.com/attachments/751252665085984882/751253034906026126/HAPPYFARM.pdf" target="_blank" rel="noopener noreferrer">Short Paper</a></div>
                    <div className="mini_descr">Beans<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span>: <a href="https://uniswap.info/token/0x801f90f81786dc72b4b9d51ab613fbe99e5e4ccd" target="_blank" rel="noopener noreferrer">UNISWAP</a></div>
                    <div className="mini_descr"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🚜</span>HappyFarm is an ongoing R&D project (<a href="https://t.me/joinchat/F1MMkRlZ2sosNU5gcz32-g" target="_blank" rel="noopener noreferrer">Telegram</a>)</div>

                    </div>
                </div>
                </div>
                <div id="wallet_panel">
                    <div className="clickable" onClick={() => this.props.update("Beanometer")}>Wallet <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">👛</span> </div>
                    <div id="wallet_board">
                        <div id="inner_wallet_board">
                            <div className="wallet_column">
                                <div className="wallet_token"  onClick={() => this.props.update("Beans")}><img className="wallet_token_icon"  alt="BEANS" src="https://i.imgur.com/8qU1rji.png"></img><div className="wallet_amount_label" id="beans_amount">0.00</div></div>
                                <div className="wallet_token" onClick={() => this.props.update("Token","0x44086035439e676c02d411880fccb9837ce37c57")}><img className="wallet_token_icon" alt="uSD" src="https://www.unifihub.com/assets/img/m4.png"></img><div className="wallet_amount_label" id="usd_amount">0.00</div></div>
                                <div className="wallet_token" onClick={() => this.props.update("Token","0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5")}><img className="wallet_token_icon" alt="UniFi"  src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"></img><div className="wallet_amount_label" id="unifi_amount">0.00</div></div>
                                <div className="wallet_token"  onClick={() => this.props.update("Token","0x34612903Db071e888a4dADcaA416d3EE263a87b9")}><img className="wallet_token_icon"  alt="ARTE" src="https://i.imgur.com/fYu1egI.png"></img><div className="wallet_amount_label" id="arte_amount">0.00</div></div>
                               <div className="wallet_token"><a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer"><img className="wallet_token_icon"  alt="ETH" src="https://i.imgur.com/FPL7c5a.png"></img></a><div className="wallet_amount_label" id="eth_amount">0.00</div></div>
                            </div>  
                            <div className="wallet_column">
                                <div className="wallet_token "  onClick={() => this.props.update("Beans")}><div className="wallet_icon"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">⛰️</span></div><div className="wallet_amount_label" id="hland_amount">0</div></div>
                                <div className="wallet_token "  onClick={() => this.props.update("Beans")}><div className="wallet_icon"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌾</span></div><div className="wallet_amount_label" id="hmill_amount">0.00</div></div>
                                <div className="wallet_token"  onClick={() => this.props.update("Beans")}><div className="wallet_icon"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐄</span></div><div className="wallet_amount_label" id="hcow_amount">0</div></div>
                                <div className="wallet_token"  onClick={() => this.props.update("Beans")}><div className="wallet_icon"><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">💩</span></div><div className="wallet_amount_label" id="hshit_amount">0.00</div></div>
                            </div>  
                        </div>
                    </div>
                    <div id="control_panel">
                        <div className="clickable" onClick={() => window.open("https://www.dfohub.com/")}>Control <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌷</span></div>
                        <div id="control_board">
                           <input type="button" className="control_button" value="🌈 INSTRUCTIONS"  onClick={() => this.props.update("Instructions")}></input>
                           <input type="button" className="control_button" value="🚜 DFO"  onClick={() => this.props.update("DFO")}></input>
                           <input type="button" className="control_button" value="👻 ACCOUNT"  onClick={() => this.props.update("Beanometer")}></input>
                           <input type="button" className="control_button" value="🌄 HAPPYLAND"  onClick={() => this.props.update("HappyLand")}></input>
                           <input type="button" className="control_button" value="🥗 RECIPIES"  onClick={() => this.props.update("Math")}></input>
                           <input type="button" className="control_button" value="🐈 PROXY"  onClick={() => this.props.update("HappyProxy")}></input>
                           <input type="button" className="control_button" value="💀 ..."  onClick={() => this.props.update("Research")}></input>
                        </div>
                        </div>
                </div>
        </div>
        );
    }


}

        let ABIstake=[{"inputs":[{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"address","name":"doubleProxy","type":"address"},{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"timeWindows","type":"uint256[]"},{"internalType":"uint256[]","name":"rewardMultipliers","type":"uint256[]"},{"internalType":"uint256[]","name":"rewardDividers","type":"uint256[]"},{"internalType":"uint256[]","name":"rewardSplitTranches","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"uint256","name":"tier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"PartialWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"tier","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"poolPosition","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"firstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"secondAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"partialRewardBlockTimes","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"splittedReward","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"uint256","name":"tier","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"poolPosition","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"firstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"secondAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"doubleProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyFlush","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"}],"name":"getStakingCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"}],"name":"getStakingInfo","outputs":[{"internalType":"uint256","name":"minCap","type":"uint256"},{"internalType":"uint256","name":"hardCap","type":"uint256"},{"internalType":"uint256","name":"remainingToStake","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"}],"name":"length","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"partialReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDoubleProxy","type":"address"}],"name":"setDoubleProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"poolPosition","type":"uint256"},{"internalType":"uint256","name":"originalFirstAmount","type":"uint256"},{"internalType":"uint256","name":"firstAmountMin","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"secondAmountMin","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"stakeInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierData","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolPosition","type":"uint256"}],"name":"totalPoolAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
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