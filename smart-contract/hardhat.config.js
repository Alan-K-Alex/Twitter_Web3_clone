//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

/**  @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  networks:{
    sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/JVn4ZcaM8LHjyjAtErrNsZWRtVRXZ9A0',
      accounts:['88285743e576aac8c5690f2b86ae4cffe3eab4c14f77d981fa43c2ecdf236e0d',],
    },

  },
};
