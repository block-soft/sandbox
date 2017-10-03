var Web3 = require('web3');
var net  = require('net');
var fs = require('fs');
var path = require('path');



module.exports = function (host) {
	var web3 = new Web3();
	var socket = new net.Socket();
	var provider = new Web3.providers.IpcProvider(host, socket);
	web3.setProvider(provider);
	

	web3._extend({
		property: 'admin',
		methods: [
			new web3._extend.Method({
				name: 'datadir',
				call: 'admin_datadir',
				params: 0
			}),
			new web3._extend.Method({
				name: 'addPeer',
				call: 'admin_addPeer',
				params: 1,
				outputFormatter: (val) => {return String(val)}
			}),
			new web3._extend.Method({
				name: 'nodeInfo',
				call: 'admin_nodeInfo',
				params: 0
			}),
			new web3._extend.Method({
				name: 'peers',
				call: 'admin_peers',
				params: 0
			})
		]
	});




	web3._extend({
		property: 'miner',
		methods: [
			new web3._extend.Method({
				name: 'start',
				call: 'miner_start',
				params: 1,
				inputFormatter: [parseInt]
			}),
			new web3._extend.Method({
				name: 'stop',
				call: 'miner_stop',
				params: 1,
				inputFormatter: [parseInt]
			})
		]
	});




	web3._extend({
		property: 'txpool',
		methods: 
		[
			new web3._extend.Method({
				name: 'content',
				call: 'txpool_content',
				params: 0
			}),
			new web3._extend.Method({
				name: 'status',
				call: 'txpool_status',
				params: 0
			})
		]
	});


	return web3;
}
