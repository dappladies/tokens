const DLToken = artifacts.require('DLToken');
const AnimalToken = artifacts.require('AnimalToken');

module.exports = function(deployer) {
  deployer.deploy(DLToken, 1000);
  deployer.deploy(AnimalToken)
};