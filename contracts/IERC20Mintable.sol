pragma solidity ^0.4.24;

import "./IERC20.sol";

interface IERC20Mintable is IERC20 {

    function mint() public returns (bool);

    event Mint(address to, uint256 value);
}