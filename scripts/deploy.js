const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory('Domains');
  const domainContract = await domainContractFactory.deploy("xqc");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

	let txn = await domainContract.register("paul",  {value: hre.ethers.utils.parseEther('0.1')});
	await txn.wait();
  console.log("Minted domain paul.ninja");

  txn = await domainContract.setRecord("paul", "jean paul");
  await txn.wait();
  console.log("Set record for paul.ninja");

  const address = await domainContract.getAddress("paul");
  console.log("Owner of domain paul:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();