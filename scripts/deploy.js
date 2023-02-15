const { ethers, upgrades } = require("hardhat");

async function main() {
  const Dcube = await ethers.getContractFactory("Dcube");
  const proxy = await upgrades.deployProxy(Dcube);
  await proxy.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxy.address
  );

  console.log("Proxy contract address: " + proxy.address);

  console.log("Implementation contract address: " + implementationAddress);
}

main();
