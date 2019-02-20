pragma solidity ^0.4.24;

import "./ERC20Detailed.sol";

contract HaechiToken is ERC20Detailed {
    constructor(uint256 _initialSupply) ERC20Detailed("Haechi", "HCT", 18) public {
        _mint(msg.sender, _initialSupply);
    }
}