const { ethers } = require("ethers");
const fs = require("fs");
require("dotenv").config();

async function main() {
  // A Provider is an abstraction of a connection to the Ethereum network
  // The JSON-RPC API is a popular method for interacting with Ethereum
  const RPC_SERVER = process.env.RPC_SERVER;
  const provider = new ethers.providers.JsonRpcProvider(RPC_SERVER);

  // A Signer in ethers is an abstraction of an Ethereum Account
  // The most common Signers you will encounter is Wallet
  const privateKey = process.env.PRIVATE_KEY;
  const wallet = new ethers.Wallet(privateKey, provider);

  // To deploy a Contract, additional information is needed that is not available on a Contract object itself.
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const bytecode = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  );

  // The factory we use for deploying contracts
  const factory = new ethers.ContractFactory(abi, bytecode, wallet);

  // Deploy an instance of the contract
  console.log("Deploying, please wait...");
  const contract = await factory.deploy();

  // Wait until the transaction is mined
  const deploymentReceipt = await contract.deployTransaction.wait();
  console.log(deploymentReceipt);

  // Call contract function
  let favoriteNumber = await contract.retrieve();
  console.log(`Current Favorite Number: ${favoriteNumber}`);

  let transactionResponse = await contract.store(7);
  const transactionReceipt = await transactionResponse.wait();
  favoriteNumber = await contract.retrieve();
  console.log(`New Favorite Number: ${favoriteNumber}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
