async function main() {
  const initialSupply = ethers.utils.parseEther("10000000");
  const VEGANTOKEN = await hre.ethers.getContractFactory("VEGANTOKEN");
  const token = await VEGANTOKEN.deploy(initialSupply);

  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
