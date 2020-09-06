import React, { Component } from 'react'
import Web3 from 'web3';
import './css.css';


class Beanometer extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.loadBlockchainData()
    }
    
    
        async loadBlockchainData() {
            window.ethereum.enable().then(async function (accounts) {
         
                const beans = new web3.eth.Contract(ABI, ADDRESS) 
          
                if(accounts[0]){
                    let supply = await beans.methods.balanceOf(accounts[0]).call()
                    let supply_beanstalk=getBenstalk(supply)                  
                    document.getElementById("pointer_mainlabel").innerHTML="◄ "+supply/1000000000000000000+"<br>&nbsp;&nbsp;&nbsp; Beans";
                    document.getElementById("frame_beanstalk").style="top: -"+(supply_beanstalk+4)+"px;";
                    document.getElementById("beanstalk").style="margin-top: -"+(500-(supply_beanstalk))+"px;";
                }else{
                    let supply = await beans.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call()
                    let supply_beanstalk=getBenstalk(supply)    
                    document.getElementById("pointer_mainlabel").innerHTML="◄ "+supply/1000000000000000000+"<br>&nbsp;&nbsp;&nbsp; Beans";
                }
            })
        }

    render(){
        return ( 
        <div id="flyer">
        <div id="beanstalk_mainlabel">Beanometer</div>
        <img id="beanstalk_scale" src="https://i.imgur.com/NtMRRJC.png"/>
        <img id="beanstalk_back" src="https://i.imgur.com/x8dwcKn.png"/>
        <div id="frame_beanstalk">
            <img id="beanstalk" src="https://i.imgur.com/KMClcbJ.png"/>
            <div id="pointer_mainlabel">◄ 0 Beans 🌱</div>
        </div>
         <input  id="gofarm_button" type="button" value="GO FARMING!" onClick={() => this.props.update("HappyFarm")}/>
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
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")


export default Beanometer