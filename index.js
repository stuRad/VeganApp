import Web3Modal from "web3modal";
import {ethers} from 'ethers';
import renderAccount from './src/renderAccount';
import providerOptions from './src/providerOptions';
const contractAddressBalanceChecker = "0xaC7cF847c5B34C02818b37d3E1E849c474AE5979"
const VeggieTokenAddress = "0x361E25cA8a467541Fb45F6550E31bF3559161ACD"

import contractJSON from "./src/utils/MyContract.json";

const web3Modal = new Web3Modal({
  network: "Rinkeby",
  cacheProvider: true,
  providerOptions
});


async function render() {
  const provider = await connect();

  const signer = await provider.getSigner(0);

  const address = await signer.getAddress();

  const myContract = new ethers.Contract(contractAddressBalanceChecker, contractJSON.abi, signer);
  const rawBalance = await myContract.connect(signer).callStatic.checkBal(VeggieTokenAddress, address);
  const balance = ethers.utils.formatEther(rawBalance);


  renderAccount({ address, balance }, logoutHandler);
}


async function logoutHandler() {
  web3Modal.clearCachedProvider();
  await connect();
  await render();
}

async function connect() {
  const externalProvider = await web3Modal.connect();
  return new ethers.providers.Web3Provider(externalProvider);
}

render();
