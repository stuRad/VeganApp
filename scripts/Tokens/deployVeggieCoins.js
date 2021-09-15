async function tokenDeployer() {
  //const initialSupply = ethers.utils.parseEther("10000000");
  const VeggieCoins = await hre.ethers.getContractFactory("VeggieCoins");

  const token = await VeggieCoins.deploy();

  await token.deployed();

  console.log("VeggieCoins deployed to:", token.address);
}

tokenDeployer()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
