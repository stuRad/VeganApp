const hre = require("hardhat");
const { assert } = require("chai");
const { ethers } = require("ethers");
const {VEGGIECOINS, NFTS, MYADDRESS} = require("../scripts/ADDRESSES.js");
const {createMyAccount, createRandomAccount, createAccountWithParams} = require("../scripts/Accounts/accountCreation.js");
const {airdrop} = require("../scripts/Accounts/initialAirdrop.js");
const api = require('etherscan-api').init('RQ7T5VPH5MAQRIFH8V7U1D9CURQNHTZZYB','rinkeby', 3000);


describe("Account creation", () => {

  describe("Accounts with diff dates", () => {
    it("should mint 1 VGN token to a user who went vegan 1 day ago", async () => {
      //need to update these dates to be yesterday
      const userOneDay = createAccountWithParams(
          ethers.Wallet.createRandom().address,
          "2021, 9, 14",
          "2021, 9, 14"
        );
      // var today = new Date();
      // var yesterday = today.setDate(today.getDate() - 1);
      // var userOneDay = {
      //   address: ethers.Wallet.createRandom().address,
      //   veganniversary: yesterday,
      //   accountCreated: yesterday,
      //   lastLogin: today
      // };
      await airdrop(userOneDay);
      const userAddress = userOneDay.address;
      //give etherscan time to see + track the transction
      await new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve("anything");
        }, 15000);
      });
      const result = await api.account.tokenbalance(userAddress, '', VEGGIECOINS);
      tokenCount = ethers.utils.formatEther(result.result);
      assert.equal(tokenCount, 1);
    })

  })

})
