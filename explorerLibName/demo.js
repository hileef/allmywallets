const explorerName = 'ethereum.etherscan'
const Explorer = require('./src/explorers/EthereumEtherscan')
const explorer = new Explorer()

const testAddresses = require('./test/fixtures.json').addresses
const address = testAddresses[explorerName];

(async function () {
  const res = await explorer
      .address(address)
      .fetch(['transactions', 'balances'])
      .exec()

  console.log(res[0].balances)
}()).catch(console.log)
