import React, { Component } from 'react'
import Web3 from 'web3'
import './css.css';


class DFO extends Component {
    componentDidMount() {
        this.loadBlockchainData()
    }
    
    
        async loadBlockchainData() {
            window.ethereum.enable().then(async function (accounts) {   
                const beans = new web3.eth.Contract(ABI, BEANS) 
                    let supply = await beans.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call()/1000000000000000000   
                    let supstr=supply.toString()
                    supstr=supstr.substring(0,supstr.indexOf(".")+3)                                  
                    document.getElementById("beans_amount").innerHTML=supstr;

                    const usd = new web3.eth.Contract(ABI, uSD);
                    let supply2 = await usd.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call()/1000000000000000000   
                    let supstr2=supply2.toString()
                    supstr2=supstr2.substring(0,supstr2.indexOf(".")+3)                                  
                    document.getElementById("usd_amount").innerHTML=supstr2;

                    const arte = new web3.eth.Contract(ABI, UNIFI);
                    let supply3 = await arte.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call()/1000000000000000000   
                    let supstr3=supply3.toString()
                    supstr3=supstr3.substring(0,supstr3.indexOf(".")+3)                                  
                    document.getElementById("arte_amount").innerHTML=supstr3;

                    const unifi = new web3.eth.Contract(ABI, ARTE);
                    let supply4 = await unifi.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call()/1000000000000000000   
                    let supstr4=supply4.toString()
                    supstr4=supstr4.substring(0,supstr4.indexOf(".")+3)                                 
                    document.getElementById("unifi_amount").innerHTML=supstr4;

                   
                    const eth = await web3.eth.getBalance("0x510f0a380c914928386bdA31dC159FcB30Ffa708")/1000000000000000000
                    let supstr5=eth.toString()
                    supstr5=supstr5.substring(0,supstr5.indexOf(".")+3)                                 
                    document.getElementById("eth_amount").innerHTML=supstr5;


            })
        }


    render(){
        return ( 
            <div>
                <div id="DFO_panel">
                    <div id="dfo_header">
                        <div id="dfo_label"  onClick={() => this.props.update("HappyFarm")}><span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🚜</span> HappyFarm DFO</div>
                        <div id="dfo_mini_panel">
                        <input id="proposal_button" type="button" value="💎 PROPOSAL"  onClick={jump}></input><br></br>
                        QUORUM: 18% - CAP: 22%
                        </div>
                    </div>
                    <div id="dfo_description"><a className="xlink" href="https://etherscan.io/tokenholdings?a=0x510f0a380c914928386bda31dc159fcb30ffa708" target="_blank" rel="noopener noreferrer">Vault <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🗻</span></a></div>
                    <div className="clear"/>
                <div id="vault_panel">
                    <div className="vault_token"  onClick={() => this.props.update("Beans")}><img className="vault_token_icon"  alt="BEANS" src="https://i.imgur.com/8qU1rji.png"></img><div className="vault_amount_label" id="beans_amount">5000</div></div>
                    <div className="vault_token"><a href="https://etherscan.io/token/0x44086035439E676c02D411880FcCb9837CE37c57" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="uSD" src="https://www.unifihub.com/assets/img/m4.png"></img></a><div className="vault_amount_label" id="usd_amount">0.00</div></div>
                    <div className="vault_token"><a href="https://etherscan.io/token/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="UniFi" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"></img></a><div className="vault_amount_label" id="unifi_amount">0.00</div></div>
                    <div className="vault_token"><a href="https://etherscan.io/token/0x34612903Db071e888a4dADcaA416d3EE263a87b9" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="ARTE" src="https://i.imgur.com/fYu1egI.png"></img></a><div className="vault_amount_label" id="arte_amount">0.00</div></div>
                    <div className="vault_token"><a href="https://etherscan.io/" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="ETH" src="https://i.imgur.com/FPL7c5a.png"></img></a><div className="vault_amount_label" id="eth_amount">0.00</div></div>
                </div>  
                </div>   
                     
        <div id="uniswap_frame_container" >
           <iframe id="uniswap_frame" title="uniswap_dfo_info" src="https://uniswap.info/account/0x510f0a380c914928386bdA31dC159FcB30Ffa708"></iframe>   
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

        function jump(){
            window.open("https://dapp.dfohub.com/?addr=0x703De1282c0390Eb6AF741Ac6A5C8eF88161cae3")
          }

export default DFO