async function deployer() {
  const AnimalNFT = await hre.ethers.getContractFactory("AnimalNFT");
  const nft = await AnimalNFT.deploy();

  await nft.deployed();

  return nft.address;
}

module.exports = {deployer};
