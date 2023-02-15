const { ethers, upgrades } = require("hardhat");

const proxyAddress = "0xBE466c62A1F92a42525D672f4792bE6E0443aa81";

async function main() {
  const Dcube = await ethers.getContractFactory("Dcube");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, Dcube);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("Implementation contract address: " + implementationAddress);
}

main();
