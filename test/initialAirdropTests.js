const hre = require("hardhat");
const { assert } = require("chai");
const { ethers } = require("ethers");
const {VEGGIECOINS, NFTS, MYADDRESS} = require("../scripts/ADDRESSES.js");
const {createMyAccount, createRandomAccount, createAccountWithParams} = require("../scripts/Accounts/accountCreation.js");
const {airdrop} = require("../scripts/Accounts/initialAirdrop.js");
const api = require('etherscan-api').init('RQ7T5VPH5MAQRIFH8V7U1D9CURQNHTZZYB','rinkeby', 3000);



describe("Account with 1 day of being vegan", () => {
  it("should mint 1 VGN token to the user AND 0 animal NFTs", async () => {
    var today = new Date();
    var yesterday = today.setDate(today.getDate() - 1);

    var userOneDay = {
      address: ethers.Wallet.createRandom().address,
      veganniversary: new Date(yesterday),
      accountCreated: new Date(yesterday)
    };

    await airdrop(userOneDay);
    const userAddress = userOneDay.address;
    
    //give etherscan time to see + track the transction
    await new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("anything");
      }, 30000);
    });

    const result = await api.account.tokenbalance(userAddress, '', VEGGIECOINS);
    tokenCount = ethers.utils.formatEther(result.result);
    const nftResult = await api.account.tokenbalance(userAddress, '', NFTS);
    nftCount = nftResult.result;

    assert.equal(tokenCount, 1);
    assert.equal(nftCount, 0);
  }).timeout(35000);
});

describe("Account with 30 days of being vegan", () => {

  it("should mint 30 VGN tokens to the user AND 1 animal NFT", async () => {
    var today = new Date();
    var dayago30 = today.setDate(today.getDate() - 30);

    var user30Days = {
      address: ethers.Wallet.createRandom().address,
      veganniversary: new Date(dayago30),
      accountCreated: new Date(dayago30)
    };

    await airdrop(user30Days);
    const userAddress = user30Days.address;

    //give etherscan time to see + track the transction
    await new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("anything");
      }, 30000);
    });
    const tokenResult = await api.account.tokenbalance(userAddress, '', VEGGIECOINS);
    const nftResult = await api.account.tokenbalance(userAddress, '', NFTS);
    tokenCount = ethers.utils.formatEther(tokenResult.result);
    nftCount = nftResult.result;

    assert.equal(tokenCount, 30);
    assert.equal(nftCount, 1);
  }).timeout(35000);
});
