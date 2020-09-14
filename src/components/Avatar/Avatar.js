import React, { Component } from 'react'
import Web3 from 'web3';
import './css.css';


class Avatar extends Component {
   

    componentDidMount() {
        this.loadBlockchainData()
    }
    
    
        async loadBlockchainData() {
            window.ethereum.enable().then(async function (accounts) {
         
                const beans = new web3.eth.Contract(ABI, ADDRESS) 
          
                if(accounts[0]){   
                    let avatar="👻";
                    let res=accounts[0]
                    avatar=getAvatar(res);
                    document.getElementById("Avatar_face").innerHTML = '<span class="Avatar_face" aria-labelledby="jsx-a11y/accessible-emoji" role="img">'+avatar+'</span>';
                    document.getElementById("Avatar_name").innerHTML = avatar;
                    let avatar2=getFamily(res);
                    document.getElementById("Avatar_family").innerHTML = avatar2;
                    document.getElementById("Avatar_signature").innerHTML = avatar+avatar2;
               }else{
                    document.getElementById("Avatar_face").innerHTML = '<span class="Avatar_face" aria-labelledby="jsx-a11y/accessible-emoji" role="img">👻</span>';
                    document.getElementById("Avatar_family").innerHTML = '<span class="Avatar_face" aria-labelledby="jsx-a11y/accessible-emoji" role="img">👻</span>';                 
                }
            })
        }

    render(){
        return ( 
        <div id="Aavatar_panel">
            <div id="Avatar_mainlabel">Official ID Card</div>
            <span id="Avatar_face" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐻</span>
            <div className="Avatar_row">
            <div className="Avatar_label">First Name:</div>
            <span id="Avatar_name" className="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐻</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_label">Family Name:</div>
            <span id="Avatar_family"  class="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🦁</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_label">Birth Place:</div>
            <span class="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">Barn</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_label">Locality:</div>
            <span class="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">⛰️</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_label">State:</div>
            <span class="Avatar_names" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🌄</span>
            </div>
            <div className="clear"/>
            <div className="Avatar_row">
            <div className="Avatar_signature">signature:</div>
            <div className="clear"/>
            <span  id="Avatar_signature" class="Avatar_signature" aria-labelledby="jsx-a11y/accessible-emoji" role="img">🐻🦁</span>
            </div>
            <div className="clear"/>
            


            <center><input  id="Avatar_button" type="button" value="👛 Account" onClick={() => this.props.update("Beanometer")}/></center>
        </div>
        );
    }


}

function getAvatar(res){
    let avatar="👻";
    if(res.slice(-1)==="0")avatar="🐶";
    if(res.slice(-1)==="1")avatar="🐱";
    if(res.slice(-1)==="2")avatar="🐹";
    if(res.slice(-1)==="3")avatar="🐸";
    if(res.slice(-1)==="4")avatar="🐵";
    if(res.slice(-1)==="5")avatar="🐻";
    if(res.slice(-1)==="6")avatar="🐼";
    if(res.slice(-1)==="7")avatar="🐰";
    if(res.slice(-1)==="8")avatar="🐨";
    if(res.slice(-1)==="9")avatar="🐯";
    if(res.slice(-1)==="a")avatar="🦁";
    if(res.slice(-1)==="b")avatar="🐮";
    if(res.slice(-1)==="c")avatar="🐷";
    if(res.slice(-1)==="d")avatar="🐺";
    if(res.slice(-1)==="e")avatar="🐗";
    if(res.slice(-1)==="f")avatar="🐔";
    return avatar;
}

function getFamily(ress){
    let avatar="☠️";
    let res=ress.slice(-2)
    res = res.substring(0, 1);
    if(res.slice(-1)==="0")avatar="🐳";
    if(res.slice(-1)==="1")avatar="🦈";
    if(res.slice(-1)==="2")avatar="🐅";
    if(res.slice(-1)==="3")avatar="🐍";
    if(res.slice(-1)==="4")avatar="🐞";
    if(res.slice(-1)==="5")avatar="🐪";
    if(res.slice(-1)==="6")avatar="🦋";
    if(res.slice(-1)==="7")avatar="🐙";
    if(res.slice(-1)==="8")avatar="🐄";
    if(res.slice(-1)==="9")avatar="🐇";
    if(res.slice(-1)==="a")avatar="🐖";
    if(res.slice(-1)==="b")avatar="🐏";
    if(res.slice(-1)==="c")avatar="🐐";
    if(res.slice(-1)==="d")avatar="🦎";
    if(res.slice(-1)==="e")avatar="🐠";
    if(res.slice(-1)==="f")avatar="🦍";
    return avatar;
}

let ABI=[{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"checkOnERC721Received","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"forAll","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseApprovalEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseTransferEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
let ADDRESS="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD"
let BEANS="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD"
let uSD="0x44086035439E676c02D411880FcCb9837CE37c57"
let UNIFI="0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5"
let ARTE="0x34612903Db071e888a4dADcaA416d3EE263a87b9"

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

export default Avatar