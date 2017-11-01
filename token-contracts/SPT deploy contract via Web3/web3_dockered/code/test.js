module.paths.push('/usr/lib/node_modules');

var fs = require('fs');

const contract_data = JSON.parse(
    fs.readFileSync('./libs/StepanToken2.json')
);
if (typeof(contract_data.abi) !== 'object') {
    throw new Error('not abi');
}

var real_address = "[your public key]";
var real_private = "[your private key]";

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/key"));
var from_test = web3.eth.accounts.privateKeyToAccount("0x" + real_private);
if (from_test.address != real_address) {
    console.log('wtf with private key ' + from_test.address + ' != ' + real_address);
    process.exit(1);
}
web3.eth.accounts.wallet.add("0x" + real_private);

var contract = new web3.eth.Contract(contract_data.abi);

contract.deploy({
    data: contract_data.unlinked_binary,
    arguments: ['0xC0b4ec83028307053Fbe8d00ba4372384fe4b52B', '0x959FD7Ef9089B7142B6B908Dc3A8af7Aa8ff0FA1']
}).send({
    from: real_address,
    gas: 1500000,
    gasPrice: '80000000'
}, function (error, transactionHash) {

}).on('error', function (error) {
    console.log('error', error);
}).on('transactionHash', function (transactionHash) {
    console.log('transactionHash', transactionHash);
}).on('receipt', function (receipt) {
    console.log('receipt', receipt.contractAddress);
}).on('confirmation', function (confirmationNumber, receipt) {
    console.log('confirmation', confirmationNumber);
}).then(function (new_contract) {
    console.log('Contract Deployed');
    console.log(new_contract.options.address);
    fs.writeFileSync('deployedContract.txt', new_contract.options.address);
});