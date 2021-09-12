async function deployer() {

  const AnimalNFT = await hre.ethers.getContractFactory("AnimalNFT");
  const nft = await AnimalNFT.deploy();

  await nft.deployed();

  console.log("NFT contract deployed to: " + nft.address);

  //return nft.address;
}

//this is so we dont deploy it for each Minting
deployer()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

module.exports = {deployer};
