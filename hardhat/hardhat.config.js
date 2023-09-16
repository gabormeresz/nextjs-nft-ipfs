require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_MUMBAI_RPC_URL = process.env.ALCHEMY_MUMBAI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.21",
  networks: {
    mumbai: {
      url: ALCHEMY_MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
