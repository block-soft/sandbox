var Web3 = require('web3');
var Web3Ipc = require('web3-ipc');

Manager = {
	connections: [],
	create: (type, host) => {
		var web3;
		var type = type || 'rpc';
		if (type === 'rpc') web3 = new Web3(new Web3.providers.HttpProvider((host || 'http://127.0.0.1:8545')));
		else if (type === 'ipc') web3 = Web3Ipc(host || process.env.HOME + '/.ethereum/geth.ipc');

		Manager.connections.push(web3);
		return web3;
	}
}

module.exports = Manager;