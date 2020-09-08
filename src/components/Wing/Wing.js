import React, { Component } from 'react'
import Web3 from 'web3';
import './css.css';
class Wing extends Component {

  componentDidMount() {
    this.loadBlockchainData()
}


    async loadBlockchainData() {
      const beans = new web3.eth.Contract(ABI, ADDRESS) 
      let supply = await beans.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call()
      console.log("SUPPLY      "+supply)
      supply=supply/1000000000000000000
                    let supstr=supply.toString()
                    console.log("!!"+supstr.indexOf("."))
                    supstr=supstr.substring(0,supstr.indexOf(".")+3)  
      document.getElementById("beans_counter_label").innerHTML=supstr
    }

    async enable(){
      window.ethereum.enable().then(async function (accounts) {
         console.log(accounts[0]);
         const beans = new web3.eth.Contract(ABI, ADDRESS) 
      let supply = await beans.methods.balanceOf(accounts[0]).call()
      console.log("SUPPLY      "+supply)
      supply=supply/1000000000000000000
                    let supstr=supply.toString()
                    console.log("!!"+supstr.indexOf("."))
                    supstr=supstr.substring(0,supstr.indexOf(".")+3)  
      document.getElementById("beans_counter_label").innerHTML=supstr
         document.getElementById('metamask').style.display="none";
         document.getElementById('hf_account').style.display="block";
         let res = accounts[0].substring(0, 6)+"..."+accounts[0].substring(38);
         let avatar="🐶";
         if(res.slice(-1)=="0")avatar="🐶"
         if(res.slice(-1)=="1")avatar="🐱"
         if(res.slice(-1)=="2")avatar="🐹"
         if(res.slice(-1)=="3")avatar="🐸"
         if(res.slice(-1)=="4")avatar="🐵"
         if(res.slice(-1)=="5")avatar="🐻"
         if(res.slice(-1)=="6")avatar="🐼"
         if(res.slice(-1)=="7")avatar="🐰"
         if(res.slice(-1)=="8")avatar="🐨"
         if(res.slice(-1)=="9")avatar="🐯"
         if(res.slice(-1)=="a")avatar="🦁"
         if(res.slice(-1)=="b")avatar="🐮"
         if(res.slice(-1)=="c")avatar="🐷"
         if(res.slice(-1)=="d")avatar="🐺"
         if(res.slice(-1)=="e")avatar="🐗"
         if(res.slice(-1)=="f")avatar="🐔"
         document.getElementById("wing_avatar").innerHTML = avatar;
         document.getElementById("hf_account_address").innerHTML = res;
         document.getElementById("hf_account_address").setAttribute("jump", accounts[0])
      });
    }
    

    render(){
        return (<div id="login">
          <div id="lips_search_panel"><div id="beans_counter_label">0.0</div><div id="beans_counter_image"><img id="lips_search_icon" src="https://i.imgur.com/Hs3uInv.png" onClick={() => this.props.update("Beanometer")}/></div></div>
            <div id="metamask"><div id="connect_label">connect wallet</div><img id="metamask_logo" src="http://hivemuse.com/lips/2/metamask.png" alt="metamask" onClick={this.enable}/></div>
            <div className="hf_menu" id="hf_account"  onClick={jump}><div id="wing_avatar">🐱</div><div id="hf_account_address"></div></div>
            
        </div>);
    }
}

        let ABI=[{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"checkOnERC721Received","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"forAll","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseApprovalEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseTransferEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        let ADDRESS="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD"
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

  function jump(){
    window.open("https://etherscan.io/address/"+document.getElementById("hf_account_address").getAttribute("jump"))
  }




export default Wing