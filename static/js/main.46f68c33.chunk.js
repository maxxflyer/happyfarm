(this.webpackJsonphappyfarm=this.webpackJsonphappyfarm||[]).push([[0],{267:function(e,t,n){e.exports=n(621)},272:function(e,t,n){},273:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},274:function(e,t,n){},285:function(e,t){},294:function(e,t){},312:function(e,t){},314:function(e,t){},329:function(e,t){},331:function(e,t){},405:function(e,t){},407:function(e,t){},416:function(e,t){},418:function(e,t){},443:function(e,t){},445:function(e,t){},446:function(e,t){},452:function(e,t){},454:function(e,t){},472:function(e,t){},474:function(e,t){},486:function(e,t){},489:function(e,t){},495:function(e,t){},497:function(e,t){},530:function(e,t){},613:function(e,t,n){},614:function(e,t,n){},615:function(e,t,n){},616:function(e,t,n){},617:function(e,t,n){},618:function(e,t,n){},619:function(e,t,n){},620:function(e,t,n){},621:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(265),s=n.n(i),p=(n(272),n(273),n(3)),o=n(4),l=n(8),d=n(7),u=(n(274),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"lips",opacity:"1"},r.a.createElement("img",{id:"lips_logo",src:"https://i.imgur.com/BmHURGw.png",alt:"happyfarm"}),r.a.createElement("div",{id:"lips_label"},"HappyFarm"),r.a.createElement("div",{id:"menu_button"},"MENU"),r.a.createElement("div",{id:"lips_menu"},r.a.createElement("div",{className:"menu_row"},r.a.createElement("div",null,r.a.createElement("a",{className:"lips_menu_link lips_dir_button float_left",href:"https://dapp.dfohub.com/",target:"_blank"},"DFO",r.a.createElement("br",null),r.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/XYKQ1X5.png"}))),r.a.createElement("div",null,r.a.createElement("a",{className:"lips_menu_link lips_dir_button float_left",href:"https://uniswap.info/token/0x801f90f81786dc72b4b9d51ab613fbe99e5e4ccd",target:"_blank"},"TOKEN",r.a.createElement("br",null),r.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/dcCX1vC.png"}))),r.a.createElement("div",{className:"lips_menu_link lips_dir_button float_left",href:"https://dapp.dfohub.com/",onClick:function(){return e.props.update("HappyFarm")}},"FARM",r.a.createElement("br",null),r.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/dcCX1vC.png"})),r.a.createElement("div",null,r.a.createElement("a",{className:"lips_menu_link lips_dir_button float_right",href:"https://docs.google.com/document/d/1r-wu8k9opLyIg3FW6HEFQ9aYl5X6oFi8-VZsTjHR0tA/edit?usp=sharing",target:"_blank"},"PAPER",r.a.createElement("br",null),r.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/pOEwIJ5.png"}))),r.a.createElement("div",null,r.a.createElement("a",{className:"lips_menu_link lips_dir_button float_right",href:"https://github.com/maxxflyer/happyfarm/blob/master/README.md",target:"_blank"},"GITHUB",r.a.createElement("br",null),r.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/Roc9b0U.png"}))),r.a.createElement("div",null,r.a.createElement("a",{className:"lips_menu_link lips_dir_button float_right",href:"https://twitter.com/maxxflyer",target:"_blank"},"TWITTER",r.a.createElement("br",null),r.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/WCPB544.png"}))),r.a.createElement("div",null,r.a.createElement("a",{className:"lips_menu_link lips_dir_button float_right",href:"https://discord.gg/F3Cqksx",target:"_blank"},"DISCORD",r.a.createElement("br",null),r.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/tZbrqGS.png"}))))))}}]),n}(a.Component)),c=n(17),m=n.n(c),y=n(45),f=n(56),b=n.n(f),v=(n(613),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadBlockchainData()}},{key:"loadBlockchainData",value:function(){var e=Object(y.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new _.eth.Contract(E,h),e.next=3,t.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call();case 3:n=e.sent,console.log("SUPPLY      "+n),document.getElementById("beans_counter_label").innerHTML=n/1e18;case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"enable",value:function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.ethereum.enable().then(function(){var e=Object(y.a)(m.a.mark((function e(t){var n,a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t[0]),n=new _.eth.Contract(E,h),e.next=4,n.methods.balanceOf(t[0]).call();case 4:a=e.sent,console.log("SUPPLY      "+a),document.getElementById("beans_counter_label").innerHTML=a/1e18,document.getElementById("metamask").style.display="none",document.getElementById("lips_account").style.display="block",r=t[0].substring(0,6)+"..."+t[0].substring(38),document.getElementById("lips_account_address").innerHTML=r,document.getElementById("lips_account_address").setAttribute("jump",t[0]);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"login"},r.a.createElement("div",{id:"lips_search_panel"},r.a.createElement("div",{id:"beans_counter_label"},"0.0"),r.a.createElement("div",{id:"beans_counter_image"},r.a.createElement("img",{id:"lips_search_icon",src:"https://i.imgur.com/Hs3uInv.png",onClick:function(){return e.props.update("Beanometer")}}))),r.a.createElement("div",{id:"metamask"},r.a.createElement("div",{id:"connect_label"},"connect wallet"),r.a.createElement("img",{id:"metamask_logo",src:"http://hivemuse.com/lips/2/metamask.png",alt:"metamask",onClick:this.enable})),r.a.createElement("div",{className:"lips_menu",id:"lips_account",onClick:g},r.a.createElement("div",{id:"lips_account_address"})))}}]),n}(a.Component)),E=[{inputs:[{internalType:"address",name:"proxy",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"subject",type:"address"},{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"checkOnERC721Received",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getProxy",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"subject",type:"address"},{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"forAll",type:"bool"},{internalType:"bool",name:"approved",type:"bool"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"raiseApprovalEvent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"raiseTransferEvent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"_approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"proxy",type:"address"}],name:"setProxy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}],h="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD",_=new b.a(b.a.givenProvider||"http://localhost:8545");function g(){window.open("https://etherscan.io/address/"+document.getElementById("lips_account_address").getAttribute("jump"))}var T=v,k=(n(614),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"lipshead",opacity:1},r.a.createElement(u,{update:this.props.update}),r.a.createElement(T,{update:this.props.update}))}}]),n}(a.Component)),w=(n(615),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props.update),r.a.createElement("div",{id:"flyer"},r.a.createElement("div",{id:"Splash_mainlabel"},"HappyFarm"),r.a.createElement("img",{id:"splash_image",src:"https://i.imgur.com/Hs3uInv.png"}),r.a.createElement("div",{id:"HappyFarm_sublabel"},"Farming Lambos since 2020"),r.a.createElement("input",{id:"HappyFarm_button",type:"button",value:"ENTER HAPPY FARM",onClick:function(){return e.props.update("HappyFarm")}}))}}]),n}(a.Component)),M=(n(616),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(p.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.loadBlockchainData()}},{key:"loadBlockchainData",value:function(){var e=Object(y.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.ethereum.enable().then(function(){var e=Object(y.a)(m.a.mark((function e(t){var n,a,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=new F.eth.Contract(x,I),!t[0]){e.next=11;break}return e.next=4,n.methods.balanceOf(t[0]).call();case 4:a=e.sent,r=O(a),document.getElementById("pointer_mainlabel").innerHTML="\u25c4 "+a/1e18+"<br>&nbsp;&nbsp;&nbsp; Beans",document.getElementById("frame_beanstalk").style="top: -"+(r+4)+"px;",document.getElementById("beanstalk").style="margin-top: -"+(500-r)+"px;",e.next=16;break;case 11:return e.next=13,n.methods.balanceOf("0x510f0a380c914928386bdA31dC159FcB30Ffa708").call();case 13:i=e.sent,O(i),document.getElementById("pointer_mainlabel").innerHTML="\u25c4 "+i/1e18+"<br>&nbsp;&nbsp;&nbsp; Beans";case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"flyer"},r.a.createElement("div",{id:"beanstalk_mainlabel"},"Beanometer"),r.a.createElement("img",{id:"beanstalk_scale",src:"https://i.imgur.com/NtMRRJC.png"}),r.a.createElement("img",{id:"beanstalk_back",src:"https://i.imgur.com/x8dwcKn.png"}),r.a.createElement("div",{id:"frame_beanstalk"},r.a.createElement("img",{id:"beanstalk",src:"https://i.imgur.com/KMClcbJ.png"}),r.a.createElement("div",{id:"pointer_mainlabel"},"\u25c4 0 Beans \ud83c\udf31")),r.a.createElement("input",{id:"gofarm_button",type:"button",value:"GO FARMING!",onClick:function(){return e.props.update("HappyFarm")}}))}}]),n}(a.Component));function O(e){var t=e/1e18;return console.log(t),t<=1?t*=100:t<=10?t=10*t+100:t<=100?t+=200:t=t<=1e3?t/10+300:t/100+400,console.log(t),t}var x=[{inputs:[{internalType:"address",name:"proxy",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"subject",type:"address"},{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"checkOnERC721Received",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getProxy",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"subject",type:"address"},{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"forAll",type:"bool"},{internalType:"bool",name:"approved",type:"bool"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"raiseApprovalEvent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"raiseTransferEvent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"_approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"proxy",type:"address"}],name:"setProxy",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}],I="0x801F90f81786dC72B4b9d51Ab613fbe99e5E4cCD",F=new b.a(b.a.givenProvider||"http://localhost:8545"),j=M,B=(n(617),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"flyer"},r.a.createElement("div",{id:"HappyFarm_mainlabel"},"Control Panel")),r.a.createElement("div",{id:"mainpanel"},r.a.createElement("div",{id:"farm_offer"},r.a.createElement("div",{id:"farm_offer_icons"},r.a.createElement("img",{class:"farm_icon",src:"https://i.imgur.com/BmHURGw.png"})),r.a.createElement("div",{id:"farm_offer_farm"},"HappyFarm (ACTIVE)"),r.a.createElement("div",{id:"farm_offer_logic"},r.a.createElement("div",{class:"reward"},"+\ud83c\udf31=\ud83c\udf31"),r.a.createElement("img",{class:"offer_icon",src:"https://www.unifihub.com/assets/img/m4.png"}))),r.a.createElement("div",{id:"farm_offer"},r.a.createElement("div",{id:"farm_offer_icons"},r.a.createElement("img",{class:"farm_icon",src:"https://i.imgur.com/BmHURGw.png"})),r.a.createElement("div",{id:"farm_offer_farm"},"HappyFarm (NOT ACTIVE)"),r.a.createElement("div",{id:"farm_offer_logic"},r.a.createElement("div",{class:"reward"},"+\ud83c\udf31=\ud83c\udf31"),r.a.createElement("img",{class:"offer_icon",src:"https://i.imgur.com/fYu1egI.png"}))),r.a.createElement("div",{id:"farm_offer"},r.a.createElement("div",{id:"farm_offer_icons"},r.a.createElement("img",{class:"farm_icon",src:"https://i.imgur.com/BmHURGw.png"})),r.a.createElement("div",{id:"farm_offer_farm"},"HappyFarm (NOT ACTIVE)"),r.a.createElement("div",{id:"farm_offer_logic"},r.a.createElement("div",{class:"reward"},"+\ud83c\udf31=\ud83c\udf31"),r.a.createElement("img",{class:"offer_icon",src:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5/logo.png"}))),r.a.createElement("div",{id:"farm_offer"},r.a.createElement("div",{id:"farm_offer_icons"},r.a.createElement("img",{class:"farm_icon",src:"https://i.imgur.com/BmHURGw.png"})),r.a.createElement("div",{id:"farm_offer_farm"},"HappyFarm (NOT ACTIVE)"),r.a.createElement("div",{id:"farm_offer_logic"},r.a.createElement("div",{class:"reward"},"+\ud83c\udf31=\ud83c\udf31"),r.a.createElement("img",{class:"offer_icon",src:"https://i.imgur.com/FPL7c5a.png"}))),r.a.createElement("br",null),r.a.createElement("div",{class:"descr_container"},r.a.createElement("div",{class:"descr_title"},"HOW TO FARM Beans\ud83c\udf31:"),r.a.createElement("div",{class:"descr"},"1) Connect to DFOHUB at ",r.a.createElement("a",{href:"https://dapp.dfohub.com",target:"_blank"},"dapp.dfohub.com")),r.a.createElement("div",{class:"descr"},"2) Enter HappyFarm"),r.a.createElement("div",{class:"descr"},"3) Select Menu DEFI"),r.a.createElement("div",{class:"descr"},"4) Select Menu FARMING"),r.a.createElement("div",{class:"descr"},"5) Choose your favorite pair and add it in the suggested proportions (Stake)"),r.a.createElement("div",{class:"descr"},"6) You are ready to farm Beans\ud83c\udf31"),r.a.createElement("div",{class:"descr_min"},"\ud83c\udf37",r.a.createElement("i",null," more pairs/offers will be added later")),r.a.createElement("br",null),r.a.createElement("div",{class:"descr_min"},"HappyFarm! Farming together the Farm of the future!")),r.a.createElement("div",{class:"descr_container_dark"},r.a.createElement("div",{class:"mini_descr"},"Beans\ud83c\udf31 are equities of HappyFarm DFO"),r.a.createElement("div",{class:"mini_descr"},"Paper: ",r.a.createElement("a",{href:"https://cdn.discordapp.com/attachments/751252665085984882/751253034906026126/HAPPYFARM.pdf",target:"_blank"},"Short Paper")),r.a.createElement("div",{class:"mini_descr"},"Beans\ud83c\udf31: ",r.a.createElement("a",{href:"https://uniswap.info/token/0x801f90f81786dc72b4b9d51ab613fbe99e5e4ccd",target:"_blank"},"UNISWAP")),r.a.createElement("div",{class:"mini_descr"},"\ud83d\ude9cHappyFarm is an ongoing R&D project (",r.a.createElement("a",{href:"https://t.me/joinchat/F1MMkRlZ2sosNU5gcz32-g",target:"_blank"},"Telegram"),")"))))}}]),n}(a.Component)),A=(n(618),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(p.a)(this,n),(e=t.call(this)).layoutBack=function(t){e.setState({layout:JSON.parse(t)})},e.enumBack=function(t){e.setState({layout:t})},e.jump=function(){return window.open('[["pad"],'+JSON.stringify(e.state.layout).split('"_').join("{").split('_"').join("}")+"]")},e.renderLayoutString=function(){return'[["pad"],'+JSON.stringify(e.state.layout).split('"_').join("{").split('_"').join("}")+"]"},e.state={layout:"_1_"},e}return Object(o.a)(n,[{key:"render",value:function(){return"Splash"==this.props.panel.panel?r.a.createElement("div",{id:"superpad"},r.a.createElement("div",{id:"pad"},r.a.createElement(w,{update:this.props.update}))):"Beanometer"==this.props.panel.panel?r.a.createElement("div",{id:"superpad"},r.a.createElement("div",{id:"pad"},r.a.createElement(j,{update:this.props.update}))):"HappyFarm"==this.props.panel.panel?r.a.createElement("div",{id:"superpad"},r.a.createElement("div",{id:"pad"},r.a.createElement(B,null))):void 0}}]),n}(r.a.Component)),C=(n(619),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).state={panel:"Splash"},a}return Object(o.a)(n,[{key:"update",value:function(e){this.setState({panel:e}),console.log("!")}},{key:"render",value:function(){return r.a.createElement("div",{id:"home"},r.a.createElement(k,{update:this.update.bind(this)}),r.a.createElement(A,{panel:this.state,update:this.update.bind(this)}))}}]),n}(r.a.Component));n(620);var H=function(){return r.a.createElement(C,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[267,1,2]]]);
//# sourceMappingURL=main.46f68c33.chunk.js.map