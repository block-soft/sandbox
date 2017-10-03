# web3-manager

Manage multiple Web3 objects over rpc or ipc connections.

```
$ npm install --save web3-manager
```

*** 

### Usage


```
var Manager = require('web3-manager');

// for insensitive requests
var rpc = Manager.create('rpc');

// for personal, admin, miner, and txpool modules
var ipc = Manager.create('ipc'); 
```