//const {address} = require("./accountCreation");
const { create } = require('ipfs-http-client');
const {uploader} = require("../../ipfs/upload.js");
const {VEGGIECOINS, NFTS} = require("../ADDRESSES.js");

async function handleReward(address) {

  const token = await hre.ethers.getContractAt("VeggieCoins", VEGGIECOINS);
  const nft = await ethers.getContractAt("AnimalNFT", NFTS);

  const nowDate = new Date();
  const accountCreated = new Date(2021, 1, 1);
  const lastLogin = address.lastLogin;
  const daysSinceLastLogin = Math.floor((nowDate.getTime() - lastLogin.getTime()) / (1000 * 3600 * 24));
  const monthsSinceLastLogin = Math.floor(daysSinceLastLogin / 30);

  //Give a token for each day since last login
  console.log(`Starting reward mint for user: ${address.address}`);
  console.log(`Minting ${daysSinceLastLogin} VGN tokens`);
  await token.airdropMint(address.address, ethers.utils.parseEther(daysSinceLastLogin.toString()));
  console.log(`Mint Complete!`);

  //Mint an NFT for each 30 days since last login
  //does not handle leftover days -- will reset counter each login
  for (i = 0; i < monthsSinceLastLogin; i++) {
    const ipfsUpload = await uploader();
    const tokenURI = "https://gateway.ipfs.io/ipfs/" + ipfsUpload.path;
    await nft.awardItem(address.address, tokenURI);
    console.log(tokenURI);
    console.log(`Minting ${i+1} is complete!`);
  }
  console.log(`All ${monthsSinceLastLogin} NFTs have been minted to ${address.address}!`);

  //RESET LASTLOGIN DATE
  address.lastLogin = nowDate;

}

module.exports = {handleReward}
