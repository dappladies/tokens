const DLToken = artifacts.require('DLToken')

contract('DLToken', function (accounts) {
  const deployer = accounts[0];
  const tokenSupply = 1000;

  beforeEach(async function () {
    // deploy token contract
    dlToken = await DLToken.new(tokenSupply);

  });

  describe('constructor', function () {
    it('initializes the contract with the correct values', async function() {
      let name = await dlToken.name();
      let symbol = await dlToken.symbol();
      let decimals = await dlToken.decimals();
      assert.equal(name, "DAppLadiesToken");
      assert.equal(symbol, "DLT");
      assert.equal(decimals, 18);
    })
    it('allocates the initial supply', async function() {
      let supply = await dlToken.totalSupply();
      assert.equal(supply, tokenSupply);
    })
    it('allocates the initial supply to deployers account', async function() {
      let balance = await dlToken.balanceOf(deployer);
      assert.equal(balance, tokenSupply);
    })
  });


});