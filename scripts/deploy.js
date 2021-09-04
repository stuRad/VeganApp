//const hre = require("hardhat");

async function deployer() {
  const AnimalNFT = await hre.ethers.getContractFactory("AnimalNFT");
  const nft = await AnimalNFT.deploy();

  await nft.deployed();

  //console.log("AnimalNFT deployed to:", nft.address);
  return nft.address;
}

// deployer()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });


module.exports = {deployer};
