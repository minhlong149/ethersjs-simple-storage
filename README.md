# Ethers Simple Storage

This is part of the [FreeCodeCamp Solidity & Javascript Blockchain Course](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=19842s).

Contract address: [0xAEdC20dc42643b8420157837C93F0Da9cFe91043](https://goerli.etherscan.io/address/0xAEdC20dc42643b8420157837C93F0Da9cFe91043)

## Setup

Clone this repo and install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/) dependencies. [Nodejs](https://nodejs.org/en/) is required.

```bash
git clone https://github.com/minhlong149/ethersjs-simple-storage
cd ethersjs-simple-storage
yarn install
```

## Usage

1. Run your [Ganache](https://trufflesuite.com/ganache/) local chain by hitting Quickstart on your ganache application

2. Copy the `RPC_SERVER` sting in your Ganache CLI, and place it into your `.env` file.

3. Hit the key on one of the accounts, then copy the `PRIVATE_KEY` you see and place it into your `.env` file.

4. Run `yarn compile` to compile your code. You'll see files `SimpleStorage_sol_SimpleStorage.abi` and `SimpleStorage_sol_SimpleStorage.bin` be created.

5. Deploy your application by running the following command:

```bash
yarn node deploy.js
```

## Authors

- [@minhlong149](https://www.github.com/minhlong149)
