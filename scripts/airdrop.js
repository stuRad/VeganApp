const VeganBankAddress =   "0x86990A525c0E2b9eF30981288A5C3685cE5fCb30";
const existingContractAddr = "0x361E25cA8a467541Fb45F6550E31bF3559161ACD";

async function main() {
  const token = await hre.ethers.getContractAt("VEGANTOKEN", existingContractAddr);

    const amount = ethers.utils.parseEther("80");
    await token.transfer(VeganBankAddress, amount);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
