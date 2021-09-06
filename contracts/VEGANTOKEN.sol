pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VEGANTOKEN is ERC20 {


    constructor(uint256 initialSupply) ERC20("VEGAN", "VEGAN") {
        _mint(msg.sender, initialSupply);
    }
}
