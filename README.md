# Ethers Simple Storage

This is part of the [FreeCodeCamp Solidity & Javascript Blockchain Course](https://www.youtube.com/watch?v=gyMwXuJrbJQ&t=19842s).

- [Ethers Simple Storage](#ethers-simple-storage)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Usage](#usage)

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Nodejs](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
- [ganache](https://trufflesuite.com/ganache/)

## Setup

- Clone this repo

```sh
git clone https://github.com/minhlong149/ethersjs-simple-storage
cd ethersjs-simple-storage
```

- Install dependencies

```sh
yarn install
```

## Usage

1. Run your ganache local chain, by hitting `Quickstart` on your ganache application

2. Copy the `RPC SERVER` sting in your ganache CLI, and place it into your `.env` file.

3. Hit the key on one of the accounts, and copy the key you see and place it into your `.env` file. `.env` example:

```sh
RPC_URL="HTTP://0.0.0.0:8545"
PRIVATE_KEY="11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
```

4. Compile your code. You'll see files `SimpleStorage_sol_SimpleStorage.abi` and `SimpleStorage_sol_SimpleStorage.bin` be created.

```sh
yarn compile
```

5. Run your application

```sh
yarn node deploy.js
```

> For WSL users: Change Host Name in Ganache Server settings to vEthernet (WSL)
