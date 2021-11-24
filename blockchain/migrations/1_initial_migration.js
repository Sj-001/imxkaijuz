const Migrations = artifacts.require("Migrations");
const Asset = artifacts.require("Asset");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Migrations);

  deployer.deploy(
    Asset,
    accounts[0],
    "Imxkaijuz",
    "IMXKAIJUZ",
    "0x4527be8f31e2ebfbef4fcaddb5a17447b27d2aef"
  );
};
