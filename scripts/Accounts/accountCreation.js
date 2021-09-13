//let wallets = [];
//let addresses = [];

// for (i = 0; i < 5; i++) {
//   wallets.push(ethers.Wallet.createRandom());
//   addresses.push({address: wallets[i].address, veganniversary: new Date(2021, 3, 15)});
// }

//wallets.push(ethers.Wallet.createRandom());
//addresses.push({address: wallets.address, veganniversary: new Date(2021, 3, 15)});

//console.log(addresses);

let address = {
  address: ethers.Wallet.createRandom().address,
  veganniversary: new Date(2021, 4, 15),
  accountCreated: new Date(),
  lastLogin: new Date(2021, 4, 15)
};

module.exports = {address}
