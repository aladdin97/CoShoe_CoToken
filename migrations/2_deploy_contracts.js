const CoShoe = artifacts.require("./CoShoe.sol");

module.exports = function(deployer) {
  deployer.deploy(CoShoe);
};

const CoToken = artifacts.require("./CoToken.sol");

module.exports = function(deployer) {
  deployer.deploy(CoToken);
};
