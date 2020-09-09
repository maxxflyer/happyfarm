import React from 'react';
import logo from './logo.svg';
import Home from './components/Home/Home';
import './App.css';



function App() {


  const Web3 = require('web3');
  const DFOHub = require('dfo-hub');
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");

  main().catch(console.error);
  return (
    <Home/>
  );


async function main() {
  DFOHub(web3);

  //DFOHub is now fully loaded in your Blockchain Provider object
  var myDFO = await web3.eth.dfoHub.load('0x703De1282c0390Eb6AF741Ac6A5C8eF88161cae3');
  console.log(myDFO.name + ' DFO Successfully loaded!');
  console.log('ENS is: ' + myDFO.ens);
  console.log('Every survey of this DFO will last ' + await myDFO.getMinimumBlockNumberForSurvey() + ' blocks');
};

main().catch(console.error);
}



export default App;
