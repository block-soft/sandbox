var DiamondProblem = artifacts.require("./DiamondProblem.sol");

module.exports = function(deployer) {
  deployer.deploy(DiamondProblem);
};