import React, { Component } from 'react'
import Web3 from 'web3'
import './css.css';



class DFO extends Component {
 constructor(props){
     super(props)
    this.pointer="";
 }

    componentDidMount() {
        this.loadBlockchainData()
    }

    async main() {
         };
    
    
        async loadBlockchainData() {
            window.ethereum.enable().then(async function (accounts) { 
                let DFO="0x703De1282c0390Eb6AF741Ac6A5C8eF88161cae3" 
                let wallet="0x510f0a380c914928386bdA31dC159FcB30Ffa708"
                let token=BEANS

                let select=document.getElementById("select_dfo").value
                console.log(select)
                if(select==="selectDFO"){
                    if(getUrlVars()["dfo"]){
                        DFO=getUrlVars()["dfo"]
                        const dfocontract = new web3.eth.Contract(ABIDFO, DFO)
                        wallet = await dfocontract.methods.getMVDWalletAddress().call()
                        token = await dfocontract.methods.getToken().call()
                    }
                }else{
                    DFO=select
                    const dfocontract = new web3.eth.Contract(ABIDFO, DFO)
                    wallet = await dfocontract.methods.getMVDWalletAddress().call()
                    token = await dfocontract.methods.getToken().call()
                    window.history.pushState('dfo_page', 'DFO Display', '/?dfo='+document.getElementById("select_dfo").value)
               
                }

                document.getElementById("uniswap_frame").src="https://uniswap.info/account/"+wallet
                    const beans = new web3.eth.Contract(ABI, BEANS) 
                    let supply = await beans.methods.balanceOf(wallet).call()/1000000000000000000   
                    let supstr=supply.toString()
                    if(supstr.indexOf(".")>0)supstr=supstr.substring(0,supstr.indexOf(".")+3)                                  
                    document.getElementById("beans_amount").innerHTML=supstr;

                    const usd = new web3.eth.Contract(ABI, uSD);
                    let supply2 = await usd.methods.balanceOf(wallet).call()/1000000000000000000   
                    let supstr2=supply2.toString()
                    if(supstr2.indexOf(".")>0)
                    supstr2=supstr2.substring(0,supstr2.indexOf(".")+3)                                  
                    document.getElementById("usd_amount").innerHTML=supstr2;

                    const arte = new web3.eth.Contract(ABI, ARTE);
                    let supply3 = await arte.methods.balanceOf(wallet).call()/1000000000000000000   
                    let supstr3=supply3.toString()
                    if(supstr3.indexOf(".")>0)
                    supstr3=supstr3.substring(0,supstr3.indexOf(".")+3)                                  
                    document.getElementById("arte_amount").innerHTML=supstr3;

                    const unifi = new web3.eth.Contract(ABI, UNIFI);
                    let supply4 = await unifi.methods.balanceOf(wallet).call()/1000000000000000000   
                    let supstr4=supply4.toString()
                    if(supstr4.indexOf(".")>0)
                    supstr4=supstr4.substring(0,supstr4.indexOf(".")+3)                                 
                    document.getElementById("unifi_amount").innerHTML=supstr4;

                   
                const eth = await web3.eth.getBalance(wallet)/1000000000000000000
                let supstr5=eth.toString()
                supstr5=supstr5.substring(0,supstr5.indexOf(".")+3)                                 
                document.getElementById("eth_amount").innerHTML=supstr5;
  
                const DFOHub = require('dfo-hub');
                DFOHub(web3);
                //DFOHub is now fully loaded in your Blockchain Provider object
                var myDFO = await web3.eth.dfoHub.load(DFO)
        
                    document.getElementById("dfo_label").innerHTML='<img id="dfo_selected_logo_image" alt="logo" src="https://i.imgur.com/IC3Gwic.png"/> '+myDFO.name
                    console.log('ENS is: ' + myDFO.ens);
                    console.log('Every survey of this DFO will last ' + await myDFO.getMinimumBlockNumberForSurvey() + ' blocks');
                    document.getElementById("dfo_selected_logo_image").src='https://dapp.dfohub.com/assets/img/default-logo.png'
                    document.getElementById("xlink").href='https://etherscan.io/tokenholdings?a='+wallet              
                

                const dfoc = new web3.eth.Contract(ABIDFO, DFO);
                let xxx = await dfoc.methods.getMVDFunctionalitiesManagerAddress().call()
                console.log("FUNCTIONALITIES MANAGER "+xxx)
                    const manager = new web3.eth.Contract(ABIMVDFunctManag, xxx);
                    let jso = await manager.methods.functionalitiesToJSON().call()
                    console.log(jso);
                    //jso = await manager.methods.functionalityNames().call()
                    //jso=jso.substring(1,jso.length-2)
                    //let contact=jso.split(",")
                    var contact = JSON.parse(jso);
                    let quorum=0;
                    let cap=0;
                    
                    const equities = new web3.eth.Contract(TOKENABI, token);
                    let decimals= await equities.methods.decimals().call()
                    let total_sup= await equities.methods.totalSupply().call()
                    total_sup=total_sup/Math.pow(10,decimals)
                    
                    console.log("DECIM "+decimals)
                    console.log("SUP "+total_sup)
                    for(let i=0;i<contact.length;i++){
                        if(contact[i]["codeName"]=="getMetadataLink"){
                            const meta = new web3.eth.Contract(ABIMeta, contact[i]["location"]);
                            let metalink = await meta.methods.getValue().call()
                            let url="https://gateway.ipfs.io"+metalink.substring(4);
                            fetch(url)
                            .then(response => response.json())
                            .then(json => { 
                                console.log(json)
                                let uri=json["logoUri"]
                                if(uri.substring(0,8)=="https://")uri=uri.substring(15)
                                if(uri.substring(0,7)=="ipfs://")uri=uri.substring(6)
                                url="https://gateway.ipfs.io"+uri       
                                document.getElementById("dfo_selected_logo_image").src=url;
                            });    
                        }
                        if(contact[i]["codeName"]=="getQuorum"){
                            const quorumC = new web3.eth.Contract(ABIQuorum, contact[i]["location"]);
                            quorum = ((await quorumC.methods.getValue().call())/Math.pow(10, decimals))/total_sup*100
                            console.log("QUORUM: "+Math.round(quorum))                                 
                        }
                        if(contact[i]["codeName"]=="getVotesHardCap"){
                            const capC = new web3.eth.Contract(CAPABI, contact[i]["location"]);
                            cap = ((await capC.methods.getVotesHardCap().call())/Math.pow(10, decimals))/total_sup*100
                            console.log("CAP: "+Math.round(cap))                                 
                        }
                    }
                        document.getElementById("quorum").innerHTML="QUORUM: "+ Math.round(quorum)+"% - CAP: "+ Math.round(cap)+"%";
    })
        }


    render(){
        return ( 
            <div>
                <div id="DFO_panel">
                    <div id="dfo_header">
                        <div id="dfo_label"><img id="dfo_selected_logo_image" alt="logo" src="https://i.imgur.com/IC3Gwic.png"/> HappyFarm DFO</div>
                        <div id="dfo_mini_panel">
                        <input id="proposal_button" type="button" value="💎 PROPOSAL"  onClick={() => this.props.update("UnderConstruction")}></input><br></br>
                        <div id="quorum">QUORUM: 18% - CAP: 22%</div>
                        </div>
                    </div>
                    <div id="dfo_description">
                        <select id="select_dfo" name="select_dfo" onChange={() => change_dfo(), () => this.loadBlockchainData()}>
                            <option value="selectDFO">select...</option>
                            <option value="0x703De1282c0390Eb6AF741Ac6A5C8eF88161cae3">HappyFarm 🌱</option>
                            <option value="0xbD8115939fbFB0FD4104B86aFAa594BC92916952">DFOHUB 👻</option>
                            <option value="0xbC8E0616A61137E1905adb858963f781934A44eD">UniFi 👻</option>
                            <option value="0x97216A19c2Fe095ebB9570435A13A73E06e7FD3b">EthArt 👻</option>
                            <option value="0x48B0a1717865b6B6790C656EE957756F7c7C2A4E">YearnEvolved</option>
                            <option value="0xd5F8E370130ebBF6dF7bF742866ff056331Fd73C">DFOHUB Special Tests</option>
                            <option value="0x5EdE1c3241165cF9d5D77AD221B8EE7a097ac60F">Lotte</option>
                            <option value="0xfD344335b239d7864c83c7613FF7c228dF5F3e88">NERD</option>
                            <option value="0xa540F3908c7AddFA2EB0252ae8c7AF282dED0B9D">Yakuza DAO</option>
                            <option value="0xce88592F9801b6826FD698024225301C8B2fC139">Farmed VC</option>
                            <option value="0xA0382590Df0AaC6a64772ef24F928E50F1aEb3b5">BAST</option>
                            <option value="0xD9CEd65730771C6602FD98C20D2F291412054605">LIPS</option>
                            <option value="0xE2A0003D9561f7a6d4cfB9f579f6dBc337591692">Community Token</option>
                            <option value="0x5378Ca3938f5B12f7C1A4743d04E905c0c1f3A1A">Pornvisory</option>
                            <option value="0x083672a75189be9349486288952fAbe7F072d2ff">ETHLocal</option>
                            <option value="0x4e47a14B976274C432abDCd8477200E9d7cEac93">Arteflux</option>
                            <option value="0x9D203E1fca3F708b344c8E13d562d4Dd9A92782b">NERV</option>
                            <option value="0x18a2AC54D1fB7F23DCCcC6Fb9daf93f5cEfafc6c">FortKnox</option>
                            <option value="0xdd5f32ddDc9a6F428a2a5d9F2C6B4BBb138bA1aD">LegalHackersRoma</option>
                            <option value="0x0F192aa61fA615226dC78b5D74A326727f5E523F">BuidlersFund</option>
                            <option value="0x83EAeF5313924715ADB657a28299B22748B3871C">BuidlersVault</option>
                            <option value="0x2691AB97cF3CA8B8b310E12883FE0cD8eD3901FA">ETHTurin</option>
                            <option value="0x99E1C0F5A898D4daFe22A014507780DBf6f1d78b">NonconDFO</option>
                            <option value="0xC35c2523c342eb227976bE6e61D6fc354A68999A">ETHEmergencyMode</option>
                        </select>
                        <a id="xlink" href="https://etherscan.io/tokenholdings?a=0x510f0a380c914928386bda31dc159fcb30ffa708" target="_blank" rel="noopener noreferrer">Vault <span aria-labelledby="jsx-a11y/accessible-emoji" role="img">🗻</span></a></div>
                    <div className="clear"/>
                <div id="vault_panel">
                    <div className="vault_token" onClick={() => this.props.update("Beans","0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD")}><img className="vault_token_icon"  alt="BEANS" src="https://i.imgur.com/8qU1rji.png"></img><div className="vault_amount_label" id="beans_amount">5000</div></div>
                    <div className="vault_token" onClick={() => this.props.update("Token","0x44086035439E676c02D411880FcCb9837CE37c57")} href="https://etherscan.io/token/0x44086035439E676c02D411880FcCb9837CE37c57" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="uSD" src="https://www.unifihub.com/assets/img/m4.png"></img><div className="vault_amount_label" id="usd_amount">0.00</div></div>
                    <div className="vault_token" onClick={() => this.props.update("Token","0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5")} href="https://etherscan.io/token/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="UniFi" src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"></img><div className="vault_amount_label" id="unifi_amount">0.00</div></div>
                    <div className="vault_token" onClick={() => this.props.update("Token","0x34612903Db071e888a4dADcaA416d3EE263a87b9")} href="https://etherscan.io/token/0x34612903Db071e888a4dADcaA416d3EE263a87b9" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="ARTE" src="https://i.imgur.com/fYu1egI.png"></img><div className="vault_amount_label" id="arte_amount">0.00</div></div>
                    <div className="vault_token" onClick={() => this.props.update("Token","0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD")} href="https://etherscan.io/" target="_blank" rel="noopener noreferrer"><img className="vault_token_icon" alt="ETH" src="https://i.imgur.com/FPL7c5a.png"></img><div className="vault_amount_label" id="eth_amount">0.00</div></div>
                </div>  
                </div>   
                     
        <div id="uniswap_frame_container" >
           <iframe id="uniswap_frame" title="uniswap_dfo_info" src="https://uniswap.info/account/"></iframe>   
        </div>
        </div>
        );
    }

 
    }

        let CAPABI=[{"inputs": [],"name": "getVotesHardCap","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"},{"internalType": "address","name": "","type": "address"}],"name": "onStart","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "","type": "address"}],"name": "onStop","outputs": [],"stateMutability": "nonpayable","type": "function"}]
        let TOKENABI=[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"totalSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"uint256","name":"totalSupply","type":"uint256"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
        let ABI=[{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"checkOnERC721Received","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"subject","type":"address"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"forAll","type":"bool"},{"internalType":"bool","name":"approved","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseApprovalEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"raiseTransferEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proxy","type":"address"}],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        let ABIDFO=[{"inputs":[{"internalType":"address","name":"votingTokenAddress","type":"address"},{"internalType":"address","name":"functionalityProposalManagerAddress","type":"address"},{"internalType":"address","name":"stateHolderAddress","type":"address"},{"internalType":"address","name":"functionalityModelsManagerAddress","type":"address"},{"internalType":"address","name":"functionalitiesManagerAddress","type":"address"},{"internalType":"address","name":"walletAddress","type":"address"},{"internalType":"address","name":"doubleProxyAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"position","type":"uint256"},{"indexed":true,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"key","type":"string"},{"indexed":true,"internalType":"bytes32","name":"firstIndex","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"secondIndex","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Event","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"codeName","type":"string"},{"indexed":true,"internalType":"address","name":"proposal","type":"address"},{"indexed":false,"internalType":"string","name":"replaced","type":"string"},{"indexed":false,"internalType":"address","name":"replacedSourceLocation","type":"address"},{"indexed":false,"internalType":"uint256","name":"replacedSourceLocationId","type":"uint256"},{"indexed":true,"internalType":"address","name":"replacedLocation","type":"address"},{"indexed":false,"internalType":"bool","name":"replacedWasSubmitable","type":"bool"},{"indexed":false,"internalType":"string","name":"replacedMethodSignature","type":"string"},{"indexed":false,"internalType":"bool","name":"replacedWasInternal","type":"bool"},{"indexed":false,"internalType":"bool","name":"replacedNeededSender","type":"bool"},{"indexed":true,"internalType":"address","name":"replacedProposal","type":"address"}],"name":"FunctionalitySet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"proposal","type":"address"}],"name":"Proposal","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"proposal","type":"address"}],"name":"ProposalCheck","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"proposal","type":"address"},{"indexed":false,"internalType":"bool","name":"success","type":"bool"}],"name":"ProposalSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newAddress","type":"address"}],"name":"ProxyChanged","type":"event"},{"inputs":[{"internalType":"address","name":"location","type":"address"},{"internalType":"bytes","name":"payload","type":"bytes"}],"name":"callFromManager","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"},{"internalType":"bytes","name":"initPayload","type":"bytes"}],"name":"changeProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proposalAddress","type":"address"}],"name":"disableProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"eventSignature","type":"string"},{"internalType":"bytes","name":"firstIndex","type":"bytes"},{"internalType":"bytes","name":"secondIndex","type":"bytes"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"emitEvent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"address","name":"proposal","type":"address"},{"internalType":"string","name":"replaced","type":"string"},{"internalType":"address","name":"replacedSourceLocation","type":"address"},{"internalType":"uint256","name":"replacedSourceLocationId","type":"uint256"},{"internalType":"address","name":"location","type":"address"},{"internalType":"bool","name":"submitable","type":"bool"},{"internalType":"string","name":"methodSignature","type":"string"},{"internalType":"bool","name":"isInternal","type":"bool"},{"internalType":"bool","name":"needsSender","type":"bool"},{"internalType":"address","name":"proposalAddress","type":"address"}],"name":"emitFromManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"bool","name":"is721","type":"bool"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"flushToWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getDelegates","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getDoubleProxyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMVDFunctionalitiesManagerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMVDFunctionalityModelsManagerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMVDFunctionalityProposalManagerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMVDWalletAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStateHolderAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"votingTokenAddress","type":"address"},{"internalType":"address","name":"functionalityProposalManagerAddress","type":"address"},{"internalType":"address","name":"stateHolderAddress","type":"address"},{"internalType":"address","name":"functionalityModelsManagerAddress","type":"address"},{"internalType":"address","name":"functionalitiesManagerAddress","type":"address"},{"internalType":"address","name":"walletAddress","type":"address"},{"internalType":"address","name":"doubleProxyAddress","type":"address"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"functionality","type":"address"}],"name":"isAuthorizedFunctionality","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"proposal","type":"address"}],"name":"isValidProposal","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"bool","name":"emergency","type":"bool"},{"internalType":"address","name":"sourceLocation","type":"address"},{"internalType":"uint256","name":"sourceLocationId","type":"uint256"},{"internalType":"address","name":"location","type":"address"},{"internalType":"bool","name":"submitable","type":"bool"},{"internalType":"string","name":"methodSignature","type":"string"},{"internalType":"string","name":"returnAbiParametersArray","type":"string"},{"internalType":"bool","name":"isInternal","type":"bool"},{"internalType":"bool","name":"needsSender","type":"bool"},{"internalType":"string","name":"replaces","type":"string"}],"name":"newProposal","outputs":[{"internalType":"address","name":"proposalAddress","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"read","outputs":[{"internalType":"bytes","name":"returnData","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"position","type":"uint256"},{"internalType":"address","name":"newAddress","type":"address"}],"name":"setDelegate","outputs":[{"internalType":"address","name":"oldAddress","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proposalAddress","type":"address"}],"name":"startProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"submit","outputs":[{"internalType":"bytes","name":"returnData","type":"bytes"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bool","name":"safe","type":"bool"},{"internalType":"address","name":"token","type":"address"}],"name":"transfer721","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
        let ABIMVDFunctManag=[{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"address","name":"sourceLocation","type":"address"},{"internalType":"uint256","name":"sourceLocationId","type":"uint256"},{"internalType":"address","name":"location","type":"address"},{"internalType":"bool","name":"submitable","type":"bool"},{"internalType":"string","name":"methodSignature","type":"string"},{"internalType":"string","name":"returnAbiParametersArray","type":"string"},{"internalType":"bool","name":"isInternal","type":"bool"},{"internalType":"bool","name":"needsSender","type":"bool"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"addFunctionality","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"address","name":"sourceLocation","type":"address"},{"internalType":"uint256","name":"sourceLocationId","type":"uint256"},{"internalType":"address","name":"location","type":"address"},{"internalType":"bool","name":"submitable","type":"bool"},{"internalType":"string","name":"methodSignature","type":"string"},{"internalType":"string","name":"returnAbiParametersArray","type":"string"},{"internalType":"bool","name":"isInternal","type":"bool"},{"internalType":"bool","name":"needsSender","type":"bool"}],"name":"addFunctionality","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"clearCallingContext","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"functionalitiesToJSON","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"l","type":"uint256"}],"name":"functionalitiesToJSON","outputs":[{"internalType":"string","name":"functionsJSONArray","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"functionalityNames","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"l","type":"uint256"}],"name":"functionalityNames","outputs":[{"internalType":"string","name":"functionsJSONArray","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"}],"name":"functionalityToJSON","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFunctionalitiesAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"}],"name":"getFunctionalityData","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"string","name":"","type":"string"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"}],"name":"hasFunctionality","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sourceLocation","type":"address"},{"internalType":"uint256","name":"getMinimumBlockNumberSourceLocationId","type":"uint256"},{"internalType":"address","name":"getMinimumBlockNumberFunctionalityAddress","type":"address"},{"internalType":"uint256","name":"getEmergencyMinimumBlockNumberSourceLocationId","type":"uint256"},{"internalType":"address","name":"getEmergencyMinimumBlockNumberFunctionalityAddress","type":"address"},{"internalType":"uint256","name":"getEmergencySurveyStakingSourceLocationId","type":"uint256"},{"internalType":"address","name":"getEmergencySurveyStakingFunctionalityAddress","type":"address"},{"internalType":"uint256","name":"checkVoteResultSourceLocationId","type":"uint256"},{"internalType":"address","name":"checkVoteResultFunctionalityAddress","type":"address"}],"name":"init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"functionality","type":"address"}],"name":"isAuthorizedFunctionality","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"functionality","type":"address"}],"name":"isValidFunctionality","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"uint8","name":"submitable","type":"uint8"},{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"preConditionCheck","outputs":[{"internalType":"address","name":"location","type":"address"},{"internalType":"bytes","name":"payload","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"codeName","type":"string"}],"name":"removeFunctionality","outputs":[{"internalType":"bool","name":"removed","type":"bool"},{"internalType":"uint256","name":"position","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"location","type":"address"}],"name":"setCallingContext","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"proposalAddress","type":"address"}],"name":"setupFunctionality","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        let ABIStake=[{"inputs":[{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"address","name":"doubleProxy","type":"address"},{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"uint256[]","name":"timeWindows","type":"uint256[]"},{"internalType":"uint256[]","name":"rewardMultipliers","type":"uint256[]"},{"internalType":"uint256[]","name":"rewardDividers","type":"uint256[]"},{"internalType":"uint256[]","name":"rewardSplitTranches","type":"uint256[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"uint256","name":"tier","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"PartialWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"uint256","name":"tier","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"poolPosition","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"firstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"secondAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"endBlock","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"partialRewardBlockTimes","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"splittedReward","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"receiver","type":"address"},{"indexed":true,"internalType":"uint256","name":"tier","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"poolPosition","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"firstAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"secondAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"poolAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"doubleProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyFlush","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"}],"name":"getStakingCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"}],"name":"getStakingInfo","outputs":[{"internalType":"uint256","name":"minCap","type":"uint256"},{"internalType":"uint256","name":"hardCap","type":"uint256"},{"internalType":"uint256","name":"remainingToStake","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"}],"name":"length","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"partialReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newDoubleProxy","type":"address"}],"name":"setDoubleProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"poolPosition","type":"uint256"},{"internalType":"uint256","name":"originalFirstAmount","type":"uint256"},{"internalType":"uint256","name":"firstAmountMin","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"secondAmountMin","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"stakeInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tierData","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokens","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolPosition","type":"uint256"}],"name":"totalPoolAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tier","type":"uint256"},{"internalType":"uint256","name":"position","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
        let ABIMeta=[{"inputs": [{"internalType": "address","name": "newSurvey","type": "address"},{"internalType": "address","name": "oldSurvey","type": "address"}],"name": "onStart","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newSurvey","type": "address"}],"name": "onStop","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "string","name": "metadataLink","type": "string"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [],"name": "getMetadataLink","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"},{"inputs": [],"name": "getValue","outputs": [{"internalType": "string","name": "","type": "string"}],"stateMutability": "view","type": "function"}]
        let ABIQuorum=[{"inputs": [{"internalType": "uint256","name": "value","type": "uint256"}],"stateMutability": "nonpayable","type": "constructor"},{"inputs": [],"name": "getValue","outputs": [{"internalType": "uint256","name": "","type": "uint256"}],"stateMutability": "view","type": "function"},{"inputs": [{"internalType": "address","name": "newSurvey","type": "address"},{"internalType": "address","name": "oldSurvey","type": "address"}],"name": "onStart","outputs": [],"stateMutability": "nonpayable","type": "function"},{"inputs": [{"internalType": "address","name": "newSurvey","type": "address"}],"name": "onStop","outputs": [],"stateMutability": "nonpayable","type": "function"}]
        let BEANS="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD"
        let uSD="0x44086035439E676c02D411880FcCb9837CE37c57"
        let UNIFI="0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5"
        let ARTE="0x34612903Db071e888a4dADcaA416d3EE263a87b9"

        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")

        function jump(){
            window.open("https://dapp.dfohub.com/?addr=0x703De1282c0390Eb6AF741Ac6A5C8eF88161cae3")
          }

          
          function getUrlVars() {
            var vars = {};
            var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                vars[key] = value;
            });
            return vars;
        }

        function change_dfo() {
            console.log(document.getElementById("select_dfo").value);
            document.getElementById("dfo_label").innerHTML='<img id="dfo_selected_logo_image" alt="logo" src="https://dapp.dfohub.com/assets/img/default-logo.png"></img> loading...';
        }


        var DFOListController = function (view) {
            var context = this;
            context.view = view;
        
            context.blockSearchSize = 40000;
            context.dfoDeployedEvent = "DFODeployed(address_indexed,address)";
            context.newDfoDeployedEvent = "DFODeployed(address_indexed,address_indexed,address,address)";
        
            context.loadList = async function loadList() {
                context.alreadyLoaded = {};
                (context.running = true) && context.loadEvents();
            };
        
            context.loadEvents = async function loadEvents(topics, toBlock, lastBlockNumber) {
                if (!context.running || toBlock === window.getNetworkElement("deploySearchStart")) {
                    delete context.running;
                    return context.view.forceUpdate();
                }
                lastBlockNumber = lastBlockNumber || await web3.eth.getBlockNumber();
                toBlock = toBlock || lastBlockNumber;
                var fromBlock = toBlock - context.blockSearchSize;
                var startBlock = window.getNetworkElement("deploySearchStart");
                fromBlock = fromBlock > startBlock ? startBlock : toBlock;
                var newEventLogs = await context.getLogs(fromBlock, toBlock, context.newDfoDeployedEvent);
                var oldEventLogs = await context.getLogs(fromBlock, toBlock, context.dfoDeployedEvent);
                (newEventLogs.length > 0 || oldEventLogs.length > 0) && setTimeout(() => {
                    try {
                        context.view.forceUpdate();
                    } catch (e) {
                    }
                });
                setTimeout(() => context.loadEvents(topics, fromBlock, lastBlockNumber));
            }
        
            context.getLogs = async function getLogs(fromBlock, toBlock, event) {
                var logs = await window.getDFOLogs({
                    address: window.dfoHub.dFO.options.allAddresses,
                    event,
                    fromBlock: '' + fromBlock,
                    toBlock: '' + toBlock
                });
                for (var log of logs) {
                    if(context.alreadyLoaded[log.data[0].toLowerCase()]) {
                        continue;
                    }
                    context.alreadyLoaded[log.data[0].toLowerCase()] = true;
                    var key = log.blockNumber + '_' + log.id;
                    !window.list[key] && (window.list[key] = {
                        key,
                        startBlock: log.blockNumber,
                        dFO: await window.loadDFO(log.data[0])
                    });
                }
                return logs;
            };
        
            context.getLatestSearchBlock = function getLatestSearchBlock() {
                return (window.list && Object.keys(window.list).length > 0 && Math.max(...Object.keys(window.list).map(it => parseInt(it.split('_')[0])))) || window.getNetworkElement('deploySearchStart');
            };
        };

export default DFO