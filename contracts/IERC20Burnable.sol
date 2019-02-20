pragma solidity ^0.4.24;

import "./IERC20Mintable.sol";

contract IERC20Burnable is IERC20Mintable {

    function burn(uint256 value) public returns (bool);

    function burnFrom(address owner, uint256 value) public returns (bool);

    event Burn(address owner, uint256 value);
}