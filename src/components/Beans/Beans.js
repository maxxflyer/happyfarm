import React, { Component } from 'react'
import Web3 from 'web3'
import './css.css';


class Beans extends Component {

    componentDidMount() {
        this.loadBlockchainData()
    }
    
    
        async loadBlockchainData() {
            window.ethereum.enable().then(async function (accounts) {   
                const beans = new web3.eth.Contract(ABI, ADDRESS) 
                    let supply = await beans.methods.balanceOf("0xdA1Ec8F2Fb47e905079663bCEA69f1a2B010f2D3").call()/1000000000000000000   
                    let supstr=supply.toString()
                    supstr=supstr.substring(0,supstr.indexOf(".")+3)   
                    document.getElementById("token_label_right").innerHTML="Master_Wallet: "+supstr+"🌱";


                    supply = await beans.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call()/1000000000000000000   
                    let supstr2=supply.toString()
                    supstr2=supstr2.substring(0,supstr2.indexOf(".")+3)            
                    let circ_sup=(10000-(parseInt(supstr)+parseInt(supstr2))) 
                    let farming=303-(circ_sup-584)                   
                    document.getElementById("token_label_center").innerHTML="Circulating Supply: "+(10000-(parseInt(supstr)+parseInt(supstr2)))+"🌱";
                    document.getElementById("token_label_center_right").innerHTML="Farming: "+farming+"🌱";

            })
        }


    render(){
        return ( 
            <div>
                <div id="token_panel">
<div id="token_label_left">Total Supply: 10000<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span></div>
<div id="token_label_center">Circulating Supply: ∼410<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span></div>
<div id="token_label_right">Master_Wallet: <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span></div>
<div id="token_label_center_right">Farming 350<span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌱</span></div>
                </div>
        <div id="uniswap_frame_container" >
           <iframe id="uniswap_frame" title="uniswap" src="https://uniswap.info/pair/0xe05252ff06de5cf6efc13074072365ce8d64f0d2"></iframe>   
        </div>
        </div>
        );
    }

 
}

        let ABI=[{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"checkOnERC721Received","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"forAll","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseApprovalEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseTransferEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        let ADDRESS="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD"
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")


export default Beans