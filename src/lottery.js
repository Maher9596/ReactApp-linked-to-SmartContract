import web3 from './web3'
// CREATING AN INSTANCE OF OUR CONTRACT. (THIS FILE IS OUR ACCESS TO OUR SMARTCONTRACT THAT EXISTS IN THE BLOCKCHAIN)
const address = '0x74D1E309e66a5b6719d67e5c4D46f583cd7723Ad'


const abi = [
    {
      constant: true,
      inputs: [],
      name: 'manager',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'pickWinner',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'entries',
      outputs: [{ name: '', type: 'address[]' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [],
      name: 'enter',
      outputs: [],
      payable: true,
      stateMutability: 'payable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ name: '', type: 'uint256' }],
      name: 'players',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
  ];



export default new web3.eth.Contract(abi, address);
