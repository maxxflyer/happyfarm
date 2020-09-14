import React, { Component } from 'react'
import Web3 from 'web3';
import './css.css';


class Beanometer extends Component {



    componentDidMount() {
        this.loadBlockchainData()
    }
    
    
        async loadBlockchainData() {
            window.ethereum.enable().then(async function (accounts) {
         
                const beans = new web3.eth.Contract(ABI, ADDRESS) 
          
                if(accounts[0]){
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

                    let supplyx = await beans.methods.balanceOf(accounts[0]).call()
                    let supply_beanstalk=getBenstalk(supply)     
                    supplyx=supplyx/1000000000000000000
                    let supstrx=supplyx.toString()
                    console.log("!!"+supstrx.indexOf("."))
                    supstrx=supstrx.substring(0,supstrx.indexOf(".")+3)            
                    document.getElementById("pointer_mainlabel").innerHTML="◄ "+supstrx+"<br>&nbsp;&nbsp;&nbsp; Beans";
                    document.getElementById("frame_beanstalk").style="top: -"+(supply_beanstalk+4)+"px;";
                    document.getElementById("beanstalk").style="margin-top: -"+(500-(supply_beanstalk))+"px;";
                    let avatar="👻";
                    let res=accounts[0]
         if(res.slice(-1)==="0")avatar="🐶"
         if(res.slice(-1)==="1")avatar="🐱"
         if(res.slice(-1)==="2")avatar="🐹"
         if(res.slice(-1)==="3")avatar="🐸"
         if(res.slice(-1)==="4")avatar="🐵"
         if(res.slice(-1)==="5")avatar="🐻"
         if(res.slice(-1)==="6")avatar="🐼"
         if(res.slice(-1)==="7")avatar="🐰"
         if(res.slice(-1)==="8")avatar="🐨"
         if(res.slice(-1)==="9")avatar="🐯"
         if(res.slice(-1)==="a")avatar="🦁"
         if(res.slice(-1)==="b")avatar="🐮"
         if(res.slice(-1)==="c")avatar="🐷"
         if(res.slice(-1)==="d")avatar="🐺"
         if(res.slice(-1)==="e")avatar="🐗"
         if(res.slice(-1)==="f")avatar="🐔"
         document.getElementById("account_label").innerHTML = avatar;
                }else{
                    let supply0 = await beans.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call() 
                    supply0=supply0/1000000000000000000
                    let supstr0=supply0.toString()
                    console.log("!!"+supstr0.indexOf("."))
                    supstr0=supstr0.substring(0,supstr0.indexOf(".")+3) 
                    document.getElementById("account_label").innerHTML = "👻";
                    document.getElementById("pointer_mainlabel").innerHTML="◄ "+supstr0+"<br>&nbsp;&nbsp;&nbsp; Beans";
                    

                    
                }
            })
        }

    render(){
        return ( 
            <div id="account_container">
                <div id="account_header">
                    <div id="account_main">
                <div id="account_label"  onClick={() => this.props.update("Avatar")}><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">👻</span></div>
                <input id="addfriend_button" type="button" value="🌼 ADD FRIEND"></input>
                </div>
                 <div id="account_panel">
                    <div className="vault_token"  onClick={() => this.props.update("Beans")}><img className="vault_token_icon" alt="BEANS" src="https://i.imgur.com/8qU1rji.png"></img><div className="vault_amount_label" id="beans_amount">5000</div></div>
                    <div className="vault_token"><a href="https://etherscan.io/token/0x44086035439E676c02D411880FcCb9837CE37c57" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="uSD"  src="https://www.unifihub.com/assets/img/m4.png"></img></a><div className="vault_amount_label" id="usd_amount">0.00</div></div>
                    <div className="vault_token"><a href="https://etherscan.io/token/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="UniFi"  src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"></img></a><div className="vault_amount_label" id="unifi_amount">0.00</div></div>
                    <div className="vault_token"><a href="https://etherscan.io/token/0x34612903Db071e888a4dADcaA416d3EE263a87b9" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="ARTE"  src="https://i.imgur.com/fYu1egI.png"></img></a><div className="vault_amount_label" id="arte_amount">0.00</div></div>
                    <div className="vault_token"><a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="ETH"  src="https://i.imgur.com/FPL7c5a.png"></img></a><div className="vault_amount_label" id="eth_amount">0.00</div></div>
                 </div>  
                 <input type="button" id="id_card_button" value="🐣 ID Card"  onClick={() => this.props.update("Avatar")}/>
                 <div id="account_friends">friends: <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐱 🐹 🦊 🐻 🐼 🦁</span></div>
                </div>
                <div className="account_basket_superpanel_left">
                <div className="account_basket_panel">
                    <div className="basket_mainlabel">Basket</div>
                    <div className="account_basket_container">
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥝 🍅 🍆 🥑 🥒 🌽 🥕</span> 
                    </div>
                </div>
                <div className="account_basket_panel">
                    <div className="basket_mainlabel">Stable</div>
                    <div className="account_basket_container">
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🦌 🐕 🐈 🐓 🦃 🐇 🦂 🐢 🐍 🦎 🐝 🐌</span>
                    </div>
                </div>
                <div className="account_basket_panel">
                    <div className="basket_mainlabel">Love</div>
                    <div className="account_basket_container">
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">💔 ❤️ 💘 💝 💖</span>
                    </div>
                </div>
                </div>

        <div id="flyer">
        <div id="beanstalk_mainlabel">Beanometer</div>
        <img id="beanstalk_scale" alt="beanstalk_scale"  src="https://i.imgur.com/NtMRRJC.png"/>
        <img id="beanstalk_back" alt="beanstalk_background"  src="https://i.imgur.com/x8dwcKn.png"/>
        <div id="frame_beanstalk">
            <img id="beanstalk"  alt="beanstalk" src="https://i.imgur.com/KMClcbJ.png"/>
            <div id="pointer_mainlabel">◄ 0 Beans <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span></div>
        </div>
         <input  id="gofarm_button" type="button" value="GO FARMING!" onClick={() => this.props.update("HappyFarm")}/>
        </div>
        <div className="account_basket_superpanel_right">
                <div className="account_basket_panel">
                    <div className="basket_mainlabel">Barn</div>
                    <div className="account_basket_container">
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱 🌾 🌿  🌵 🎋 🍄 🌰 🌷 🌹 🍖 🥐 🥔 🍞 🧀 🍯 🥛 🥚 🍷 💩 🐁</span>
                    </div>
                </div>
                <div className="account_basket_panel">
                    <div className="basket_mainlabel">Special</div>
                    <div className="account_basket_container">
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🍭 🍬 🍫 👛 ☂️🎲 🎨 📯 🍀 🎈 💎 🎁 💸 👻 💊 💋 👽 💀 🌈 🍂</span>
                    </div>
                </div>
             
                <div className="account_basket_panel">
                    <div className="basket_mainlabel">Trophy</div>
                    <div className="account_basket_container">
                    <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🥇 🥈 🥉 🏆 🎩</span>
                    </div>
                </div>
                </div>
        </div>
        );
    }


}

function getBenstalk(sup){
    let suptemp=sup/1000000000000000000
    console.log(suptemp)
    if(suptemp<=1){suptemp=suptemp*100;}else
    if(suptemp<=10){suptemp=suptemp*10+100;}else
    if(suptemp<=100){suptemp=suptemp+200;}else
    if(suptemp<=1000){suptemp=suptemp/10+300;}else{
        suptemp=suptemp/100+400;
    }
    console.log(suptemp)
    return suptemp

}

        let ABI=[{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"checkOnERC721Received","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"forAll","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseApprovalEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseTransferEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        let ADDRESS="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD"
        let BEANS="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD"
        let uSD="0x44086035439E676c02D411880FcCb9837CE37c57"
        let UNIFI="0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5"
        let ARTE="0x34612903Db071e888a4dADcaA416d3EE263a87b9"

        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")


export default Beanometer