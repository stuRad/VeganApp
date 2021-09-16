async function balanceDeploy() {
  const BalanceChecker = await ethers.getContractFactory("BalanceChecker");
  const balCheck = await BalanceChecker.deploy();
  await balCheck.deployed();
  console.log("contract deployed to: " + balCheck.address);
}

balanceDeploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

module.exports = {balanceDeploy};
