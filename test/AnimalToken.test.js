// const { expectThrow, expectRevert, BN, expectEvent, time } = require('openzeppelin-test-helpers');
// const Web3 = require('web3');

const AnimalToken = artifacts.require('AnimalToken');

contract('AnimalToken', function (accounts) {
  const tokenOwner = accounts[0];
  const newUser = accounts[1];
  const animalName = 'fido';
  const animalBreed = 'dog';
  const animalAge = 4;

  beforeEach(async function () {
    animalContract = await AnimalToken.new();
  });

  describe("mint", async function () {
    it('should create a pet token with the specified attributes', async function () {
      const { logs } = await animalContract.createToken(animalName, animalBreed, animalAge, { from: newUser });
      let animalId = logs[0].args.tokenId.toNumber();
      let animalToken = await animalContract.getAnimal(animalId);
      assert.equal(animalToken.name, animalName);
      assert.equal(animalToken.breed, animalBreed);
      assert.equal(animalToken.age, animalAge);
    });
  });
});