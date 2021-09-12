//const VeganBankAddress =   "0x86990A525c0E2b9eF30981288A5C3685cE5fCb30";
const {address} = require("./accounts");
const { create } = require('ipfs-http-client');
const {uploader} = require("../ipfs/upload.js");

const client = create();

//Run scripts/initialSupply.js then paste the address here
const existingTokensContractAddr = "0x5b370aF6024C759b591C349d28B555E81DE4211D";
//Run scripts/deploy.js then paste the address here
const existingNFTContractAddr = "0x2b0A4383A56862D51Df8786DEa55a57F57275F50";
//Replace with your own, or not. To find the contracts on rinkeby.etherscan.io, go to transaction hashes for this address
const myAddress = "0x6368CD30cc23277CF1886841E138e864e11d1981";

async function main() {
  const token = await hre.ethers.getContractAt("VEGANTOKEN", existingTokensContractAddr);
  const nft = await ethers.getContractAt("AnimalNFT", existingNFTContractAddr);

  const nowDate = new Date();
  const start = address.veganniversary;

  console.log(`Initial Airdrop for account: ${address.address}`);

  let daysVegan = Math.floor((nowDate.getTime() - start.getTime()) / (1000 * 3600 * 24));
  let monthsVegan = Math.max((nowDate.getFullYear() - start.getFullYear()) * 12 + nowDate.getMonth() - start.getMonth(), 0);

  await token.transfer(address.address, ethers.utils.parseEther(daysVegan.toString()));

  console.log(`Token airdrop for address ${address.address} on contract ${existingTokensContractAddr} is complete!`);



  //NFT STUFF
  //Go to https://rinkeby.etherscan.io/address/ existingNFTContractAddr
  //and look at recent transactions. should see all the new NFTs being awarded to address.address
  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();

  for (i = 0; i < monthsVegan; i++) {
    const ipfsUpload = await uploader();
    const tokenURI = "https://gateway.ipfs.io/ipfs/" + ipfsUpload.path;
    await nft.awardItem(myAddress, tokenURI);
    console.log(tokenURI);
    console.log(`Minting ${i+1} is complete!`);
  }
  console.log(`All initial NFTs have been minted to ${address.address} on contract ${existingNFTContractAddr}!`);
}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
