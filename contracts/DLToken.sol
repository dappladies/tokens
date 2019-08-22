pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract DLToken is Ownable, ERC20, ERC20Detailed {
  uint40 public startTime;
  uint40 public endTime;

  constructor(uint256 initialSupply) 
    ERC20Detailed("DAppLadiesToken", "DLT", 18) 
    public {
      _mint(msg.sender, initialSupply);
    } 

  function setStartDate(uint40 startDate) public onlyOwner {
    startTime = startDate;
  }

  function setEndDate(uint40 endDate) public onlyOwner {
    endTime = endDate;
  }
}