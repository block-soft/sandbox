# Web3 IPC


This package enables the use of admin,personal,miner,and txpool modules of Web3 over an IPC socket.

```
$ npm install web3-ipc
```

***

### Usage

```javascript
var Web3Ipc = require('web3-ipc');

// establish connection with ethereum nodee
var host = '/home/ubuntu/.ethereum/geth.ipc'
var web3 = new Web3Ipc(host);

var callback = (err, result) => {console.log(err ? err : result)}


web3.admin.datadir(callback);  // /home/momo/.ethereum




// add a peer
var enode = {
	id: "6084578fdc52e855714ae721dd38d21551ea2274c1f1c621be976076eb93464990f2a888769a4a56b9959983068e2be8bd9053f16ef2402e58937eaf86e34f14",
	ip: "34.201.85.233",
	port: "30303"
};

web3.admin.addPeer(`enode://${enode.id}@${enode.ip}:${enode.port}`, callback) // true


```
