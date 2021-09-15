const { create } = require('ipfs-http-client');
const {uploader} = require("../../ipfs/upload.js");
const {VEGGIECOINS, NFTS, MYADDRESS} = require("../ADDRESSES.js");
const {createMyAccount, createRandomAccount, createAccountWithParams} = require("./accountCreation.js");


async function airdrop(address) {

  //ESTABLISH REFERENCES TO TOKEN AND NFT CONTRACTS
  const token = await hre.ethers.getContractAt("VeggieCoins", VEGGIECOINS);
  const nft = await ethers.getContractAt("AnimalNFT", NFTS);

  const nowDate = new Date();
  const start = address.veganniversary;
  let daysVegan = Math.floor((nowDate.getTime() - start.getTime()) / (1000 * 3600 * 24));
  let monthsVegan = Math.max((nowDate.getFullYear() - start.getFullYear()) * 12 + nowDate.getMonth() - start.getMonth(), 0);
  //let monthsVegan = Math.floor(daysVegan / 30);

  console.log(`Starting Airdrop of ${daysVegan} VGN for new User: ${address.address}`);

  //MINT THE USER TOKENS BASED ON HOW LONG BEEN VEGAN (daysVegan)
  await token.airdropMint(address.address, ethers.utils.parseEther(daysVegan.toString()));
  //await token.transfer(address.address, ethers.utils.parseEther(daysVegan.toString()));
  console.log(`Airdrop complete!`);

  //NFT STUFF
  //Go to https://rinkeby.etherscan.io/address/ existingNFTContractAddr
  //and look at recent transactions. should see all the new NFTs being awarded to address.address
  for (i = 0; i < monthsVegan; i++) {
    const ipfsUpload = await uploader();
    const tokenURI = "https://gateway.ipfs.io/ipfs/" + ipfsUpload.path;
    //MINT RANDOM NFT TO USER
    await nft.awardItem(address.address, tokenURI);
    console.log(tokenURI);
    console.log(`Minting ${i+1} is complete!`);
  }
  console.log(`All ${monthsVegan} initial NFTs have been minted to ${address.address} on contract ${NFTS}!`);
  return true;
}

module.exports = {airdrop}


// const userOneDay = createAccountWithParams(
//     MYADDRESS,
//     "2021, 9, 14",
//     "2021, 9, 14"
//   );
//
// airdrop(userOneDay)
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
