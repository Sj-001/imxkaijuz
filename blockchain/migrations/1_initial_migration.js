const Migrations = artifacts.require("Migrations");
const Asset = artifacts.require("Asset");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(
    Asset,
    "0x3608301a2b29A1D5780206a4B392E0E558A5cAf4",
    "0x5FDCCA53617f4d2b9134B29090C87D01058e27e9"
  );
};
