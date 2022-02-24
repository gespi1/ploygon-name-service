require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
		mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/_1ceV_3P3BPsf0SfB563AhwPlqEvTtIG",
      accounts: ["3858ae272fc0e21b5a6af25f48bc357a0109ac9294e55146c7018fa7e7069df3"],
		}
  }
};
