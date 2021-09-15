/* pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


contract BalanceChecker {

	mapping(address => uint256) balances;

	//token is contract balance
	  function checkBal(address token, address holder) public view returns(uint) {
		IERC20 token = IERC20(token);
		return token.balanceOf(holder);
	  }


	function transfer(address _to, uint256 _value) public returns (bool) {
		require(balances[msg.sender] >= _value);
		balances[msg.sender] -= _value;
		balances[_to] += _value;
		return true;
	}
} */
