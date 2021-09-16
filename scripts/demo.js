const hre = require("hardhat");
const { ethers } = require("ethers");
const {VEGGIECOINS, NFTS, MYADDRESS} = require("../scripts/ADDRESSES.js");
const {createMyAccount, createRandomAccount, createAccountWithParams} = require("../scripts/Accounts/accountCreation.js");
const {airdrop} = require("./Accounts/initialAirdrop.js");
const {handleReward} = require("./Accounts/reward.js");


let today = new Date();
const yesterday = today.setDate(today.getDate() - 1);
const oneMonthAgo = today.setDate(today.getDate() - 30);
const oneYearAgo = today.setDate(today.getDate() - 365);

//address, veganniversary, accountCreated, lastLogin

const userVeganOneDay = createAccountWithParams(ethers.Wallet.createRandom().address, new Date(yesterday), new Date());
const userVeganOneMonth = createAccountWithParams(ethers.Wallet.createRandom().address, new Date(oneMonthAgo), new Date());
const userStuart = createMyAccount();

const userLastLoginOneDay = createAccountWithParams(ethers.Wallet.createRandom().address, new Date(oneMonthAgo), new Date(oneMonthAgo), new Date(yesterday));
const userLastLoginOneMonth = createAccountWithParams(ethers.Wallet.createRandom().address, new Date(oneYearAgo), new Date(oneYearAgo), new Date(oneMonthAgo));

const aVolunteer = {
  address: "",
  veganniversary: new Date(oneYearAgo),
  accountCreated: new Date(oneYearAgo),
  lastLogin: new Date()
}

//Will mint user 1 VGN token but no NFTs
async function airdropUserOneDay() {
  await airdrop(userVeganOneDay);
}

//Will mint user 30 VGN tokens and 1 NFT
async function airdropUserOneMonth() {
  await airdrop(userVeganOneMonth);
}

async function airdropStuart() {
  await airdrop(userStuart);
}

//Will mint 1 VGN token to user
async function rewardUserOneDay() {
  await handleReward(userLastLoginOneDay);
}

//Will mint 30 VGN token to user
async function rewardUserOneMonth() {
  await handleReward(userLastLoginOneMonth);
}


//DEMO FUNCTIONS

//airdropUserOneDay();
//airdropUserOneMonth();
//airdropStuart();
//rewardUserOneDay()
//rewardUserOneMonth();
