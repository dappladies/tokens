pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";

contract AnimalToken is ERC721Full {

    struct Animal {
      string name;
      string breed;
      uint256 age;
    }

    Animal[] public animalTokens;

    constructor() ERC721Full("AnimalToken", "AMT") public {
    }

    function createToken(string memory _name, string memory _breed, uint256 _age) public returns (uint256) {
        Animal memory _animal = Animal({
          name: _name,
          breed: _breed,
          age: _age
        });

        uint256 _animalId = animalTokens.push(_animal) - 1;

        _mint(msg.sender, _animalId);
        return _animalId;
    }

    function getAnimal(uint256 _animalID) external view returns (string memory name, string memory breed, uint age) {
      Animal memory _animal = animalTokens[_animalID];

      name = _animal.name;
      breed = _animal.breed;
      age = _animal.age;
    }
}