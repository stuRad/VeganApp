//const VeganBankAddress =   "0x86990A525c0E2b9eF30981288A5C3685cE5fCb30";
const {addresses} = require("./accounts");

//Run scripts/initialSupply.js then paste the address here
const existingContractAddr = "";

async function main() {
  const token = await hre.ethers.getContractAt("VEGANTOKEN", existingContractAddr);

  for (i = 0; i < addresses.length; i++) {

    let daysVegan = Math.floor((((((Date.now() - addresses[i].veganniversary) / 1000) / 60) / 60) / 24));

    //console.log(addresses[i].address);
    await token.transfer(addresses[i].address, ethers.utils.parseEther(daysVegan.toString()));

  }


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
