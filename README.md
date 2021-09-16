# VeganApp

Gamify being vegan!

Input your Veganniversary upon account creation and we'll mint you a VGN token for each day you've already been vegan -- then every subsequent time you log in to the app, you will be minted a new token for each day since your last login.
  You will also be minted a randomized animal NFT for every 30 days in both cases
  
Setup:

npm i

edit "myAddress' in ADDRESSES.js to be your own address

create your own .env file with PRIVATE_KEY and RINKEBY_URL

Running:

cd into the app
run "npx hardhat test --network rinkeby" to run the tests
run "npm hardhat run scripts/demo.js --network rinkeby" to play around with the functionality

