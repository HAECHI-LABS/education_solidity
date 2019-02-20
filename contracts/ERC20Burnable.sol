pragma solidity ^0.4.24;

import "./ERC20Mintable.sol";
import "./IERC20Burnable.sol";

contract ERC20Burnable is ERC20Mintable, IERC20Burnable {
    function burn(uint256 value) public returns (bool){
        
    }

    function burnFrom(address owner, uint256 value) public returns(bool) {

    }
}