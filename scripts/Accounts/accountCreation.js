function createMyAccount() {
  return {
    address: "0x6368CD30cc23277CF1886841E138e864e11d1981",
    veganniversary: new Date(2019, 1, 18),
    accountCreated: new Date(),
    lastLogin: new Date(2021, 8, 1)
  };
}

function createRandomAccount() {
  const veganniversaryDate = randomDate(new Date(2017, 0, 1), new Date(2020, 0, 1));
  const accountCreatedDate = randomDate(veganniversaryDate, new Date());
  const lastLoginDate = randomDate(accountCreatedDate, new Date());
  return {
    address: ethers.Wallet.createRandom().address,
    veganniversary: veganniversaryDate,
    accountCreated: accountCreatedDate,
    lastLogin: lastLoginDate
  };
}

function createAccountWithParams(address, veganniversaryDate, accountCreatedDate, lastLoginDate = new Date()) {
  return {
    address: address,
    veganniversary: new Date(veganniversaryDate),
    accountCreated: new Date(accountCreatedDate),
    lastLogin: new Date(lastLoginDate)
  };
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {createMyAccount, createRandomAccount, createAccountWithParams}
