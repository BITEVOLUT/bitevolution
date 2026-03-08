const hre = require("hardhat");

async function main() {
  console.log("Deploying EvolutCoin...");
  console.log("Network:", hre.network.name);

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deployer address:", deployer.address);

  const balance = await hre.ethers.provider.getBalance(deployer.address);
  console.log("Deployer balance:", hre.ethers.formatEther(balance), "BNB");

  const EvolutCoin = await hre.ethers.getContractFactory("EvolutCoin");
  const token = await EvolutCoin.deploy();

  await token.waitForDeployment();

  const tokenAddress = await token.getAddress();
  console.log("EvolutCoin deployed to:", tokenAddress);

  const totalSupply = await token.totalSupply();
  console.log("Total supply:", hre.ethers.formatEther(totalSupply), "EVL");

  const name = await token.name();
  const symbol = await token.symbol();
  const decimals = await token.decimals();
  console.log(`Token: ${name} (${symbol}), Decimals: ${decimals}`);

  // Wait for a few block confirmations before verification
  if (hre.network.name !== "hardhat" && hre.network.name !== "localhost") {
    console.log("Waiting for 5 block confirmations...");
    await token.deploymentTransaction().wait(5);

    console.log("Verifying contract on BscScan...");
    try {
      await hre.run("verify:verify", {
        address: tokenAddress,
        constructorArguments: [],
      });
      console.log("Contract verified successfully!");
    } catch (error) {
      if (error.message.includes("Already Verified")) {
        console.log("Contract is already verified.");
      } else {
        console.error("Verification failed:", error.message);
      }
    }
  }

  console.log("\n--- Deployment Summary ---");
  console.log(`Network:  ${hre.network.name}`);
  console.log(`Contract: ${tokenAddress}`);
  console.log(`Deployer: ${deployer.address}`);
  console.log(`Supply:   100,000,000 EVL`);
  console.log("-------------------------");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
