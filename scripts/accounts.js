let wallets = [];
let addresses = [];

for (i = 0; i < 5; i++) {
  wallets.push(ethers.Wallet.createRandom());
  addresses.push({address: wallets[i].address, veganniversary: new Date(2018, 1, 15)});
}

//console.log(addresses);

module.exports = {addresses}
