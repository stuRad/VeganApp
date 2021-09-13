//const VeganBankAddress =   "0x86990A525c0E2b9eF30981288A5C3685cE5fCb30";
const {address} = require("./accountCreation");
const { create } = require('ipfs-http-client');
const {uploader} = require("../../ipfs/upload.js");
const {VEGGIECOINS, NFTS} = require("../ADDRESSES.js");

const client = create();


async function airdrop() {
  const token = await ethers.getContractAt("VeggieCoins", VEGGIECOINS);
  const nft = await ethers.getContractAt("AnimalNFT", NFTS);

  const nowDate = new Date();
  const start = address.veganniversary;

  console.log(`Initial Airdrop for account: ${address.address}`);

  let daysVegan = Math.floor((nowDate.getTime() - start.getTime()) / (1000 * 3600 * 24));
  let monthsVegan = Math.max((nowDate.getFullYear() - start.getFullYear()) * 12 + nowDate.getMonth() - start.getMonth(), 0);

  //await token.transfer(address.address, ethers.utils.parseEther(daysVegan.toString()));

  await token.airdropMint(address.address, ethers.utils.parseEther(daysVegan.toString()));

  console.log(`Token airdrop for address ${address.address} on contract ${VEGGIECOINS} is complete!`);


  //NFT STUFF
  //Go to https://rinkeby.etherscan.io/address/ existingNFTContractAddr
  //and look at recent transactions. should see all the new NFTs being awarded to address.address
  for (i = 0; i < monthsVegan; i++) {
    const ipfsUpload = await uploader();
    const tokenURI = "https://gateway.ipfs.io/ipfs/" + ipfsUpload.path;
    await nft.awardItem(address.address, tokenURI);
    console.log(tokenURI);
    console.log(`Minting ${i+1} is complete!`);
  }
  console.log(`All ${monthsVegan} initial NFTs have been minted to ${address.address} on contract ${NFTS}!`);
}



airdrop()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
