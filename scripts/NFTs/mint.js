//DEFUNCT
//NOT USED
const {uploader} = require("../ipfs/upload.js");
const {deployer} = require("./deployAnimalNFTs.js");


const myAddress = "0x6368CD30cc23277CF1886841E138e864e11d1981";



async function main() {

  const existingContractAddr = "";

  const nft = await ethers.getContractAt("AnimalNFT", existingContractAddr);

  const signer0 = await ethers.provider.getSigner(0);
  const nonce = await signer0.getTransactionCount();


  const ipfsUpload = await uploader();
  const tokenURI = "https://gateway.ipfs.io/ipfs/" + ipfsUpload.path;
  console.log(tokenURI);
  await nft.awardItem(myAddress, tokenURI);

  console.log("Minting is complete!");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
