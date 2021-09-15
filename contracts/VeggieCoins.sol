//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VeggieCoins is ERC20 {
    constructor() ERC20("VeggieCoins", "VEGAN") {

    }
    function airdropMint(address recipient, uint256 amount) public {
        _mint(recipient, amount);
    }
}
