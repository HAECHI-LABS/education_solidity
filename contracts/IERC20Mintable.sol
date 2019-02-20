pragma solidity ^0.4.24;

import "./IERC20.sol";

contract IERC20Mintable is IERC20 {

    function mint(address to, uint256 value) public returns (bool);

    event Mint(address to, uint256 value);
}