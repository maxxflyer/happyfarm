(this.webpackJsonphappyfarm=this.webpackJsonphappyfarm||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),l=n.n(r),c=(n(12),n(13),n(1)),o=n(2),s=n(4),m=n(3),u=(n(14),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"lips",opacity:"1"},i.a.createElement("img",{id:"lips_logo",src:"https://i.imgur.com/BmHURGw.png",alt:"happyfarm"}),i.a.createElement("div",{id:"lips_label"},"HappyFarm"),i.a.createElement("div",{id:"lips_menu"},i.a.createElement("div",{className:"menu_row"},i.a.createElement("div",null,i.a.createElement("a",{className:"lips_menu_link lips_dir_button float_left",href:"https://dapp.dfohub.com/",target:"_blank"},"DFO",i.a.createElement("br",null),i.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/XYKQ1X5.png"}))),i.a.createElement("div",null,i.a.createElement("a",{className:"lips_menu_link lips_dir_button float_right",href:"https://docs.google.com/document/d/1r-wu8k9opLyIg3FW6HEFQ9aYl5X6oFi8-VZsTjHR0tA/edit?usp=sharing",target:"_blank"},"PAPER",i.a.createElement("br",null),i.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/dcCX1vC.png"}))),i.a.createElement("div",null,i.a.createElement("a",{className:"lips_menu_link lips_dir_button float_right",href:"https://github.com/maxxflyer/happyfarm/blob/master/README.md",target:"_blank"},"GITHUB",i.a.createElement("br",null),i.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/Roc9b0U.png"}))),i.a.createElement("div",null,i.a.createElement("a",{className:"lips_menu_link lips_dir_button float_right",href:"",target:"_blank"},"TWITTER",i.a.createElement("br",null),i.a.createElement("img",{className:"lips_dir_icon",src:"https://i.imgur.com/WCPB544.png"}))),i.a.createElement("div",null,i.a.createElement("a",{className:"lips_menu_link lips_dir_button float_right",href:"https://discord.gg/F3Cqksx",target:"_blank"},"DISCORD",i.a.createElement("br",null),i.a.createElement("img",{className:"lips_dir_icon",src:"blob:https://imgur.com/29798bab-caa6-4140-a883-a3cb642fdc84"}))))))}}]),n}(a.Component));n(15);function p(){window.ethereum.enable().then((function(e){console.log(e[0]),document.getElementById("metamask").style.display="none",document.getElementById("lips_account").style.display="block";var t=e[0].substring(0,6)+"..."+e[0].substring(38);document.getElementById("lips_account_address").innerHTML=t,document.getElementById("lips_account_address").setAttribute("jump",e[0])}))}function d(){window.open("?addr="+document.getElementById("lips_account_address").getAttribute("jump"))}function _(){window.open("?addr="+document.getElementById("lips_search_field").value)}var g=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"login"},i.a.createElement("div",{id:"lips_search_panel"},i.a.createElement("img",{id:"lips_search_icon",src:"./Beans.png",onClick:_})),i.a.createElement("div",{id:"metamask"},i.a.createElement("img",{id:"metamask_logo",src:"http://hivemuse.com/lips/2/metamask.png",alt:"metamask",onClick:p})),i.a.createElement("div",{className:"lips_menu",id:"lips_account",onClick:d},i.a.createElement("div",{id:"lips_account_address"})))}}]),n}(a.Component),f=(n(16),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"lipshead",opacity:1},i.a.createElement(u,null),i.a.createElement(g,null))}}]),n}(a.Component)),b=(n(17),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"flyer"},i.a.createElement("div",{id:"HappyFarm_mainlabel"},"HappyFarm"),i.a.createElement("img",{src:"https://i.imgur.com/BmHURGw.png"}),i.a.createElement("div",{id:"HappyFarm_sublabel"},"Farming Lambos since 2020"))}}]),n}(a.Component)),E=(n(18),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).layoutBack=function(t){e.setState({layout:JSON.parse(t)})},e.enumBack=function(t){e.setState({layout:t})},e.jump=function(){return window.open('[["pad"],'+JSON.stringify(e.state.layout).split('"_').join("{").split('_"').join("}")+"]")},e.renderLayoutString=function(){return'[["pad"],'+JSON.stringify(e.state.layout).split('"_').join("{").split('_"').join("}")+"]"},e.state={layout:"_1_"},e}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"superpad"},i.a.createElement("div",{id:"pad"},i.a.createElement(b,null)))}}]),n}(i.a.Component)),h=(n(19),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{id:"home"},i.a.createElement(f,null),i.a.createElement(E,null))}}]),n}(i.a.Component));n(20);var v=function(){return i.a.createElement(h,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.1cddd401.chunk.js.map