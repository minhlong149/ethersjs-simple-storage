const { ethers } = require("ethers");
const fs = require("fs");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;
  const encryptedPassword = process.env.ENCRYPTED_PASSWORD;

  const wallet = new ethers.Wallet(privateKey);
  const encryptedJsonKey = await wallet.encrypt(encryptedPassword, privateKey);
  // console.log(encryptedJsonKey);
  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
