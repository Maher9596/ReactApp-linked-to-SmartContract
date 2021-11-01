import Web3 from "web3";
window.ethereum.request({ method: "eth_requestAccounts" });

const web3 = new Web3(window.ethereum);

export default web3;

// EXTRACTING THE PROVIDER GIVEN BY METAMASK FROM THE WEB3 MODULE IT'S USING WHICH IS CONNECTED TO RINKEBY. 
// AND INJECTING IT INTO OUR WEB3.
