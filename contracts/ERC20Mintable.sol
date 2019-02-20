pragma solidity ^0.4.24;

import "./ERC20.sol";
import "./IERC20Mintable.sol";
import "./Ownable.sol";

contract ERC20Mintable is ERC20, IERC20Mintable, Ownable {
    function mint(address to, uint256 value) public onlyOwner returns (bool){
        _mint(to,value);
    }
}