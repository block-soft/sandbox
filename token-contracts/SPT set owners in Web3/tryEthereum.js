var Web3 = require('web3');
var util = require('ethereumjs-util');
var tx = require('ethereumjs-tx');
var lightwallet = require('eth-lightwallet');
var txutils = lightwallet.txutils;
var address = '0xC0b4ec83028307053Fbe8d00ba4372384fe4b52B';
var key = 'f9f09341755594cd3944acf59417f5a9b0b89e330a6a19323201dd1ca94e1e9a';
var bytecode = '0x6060604052655af3107a4000600255341561001957600080fd5b60405160408061092183398101604052808051919060200180519150505b60008054600160a060020a03808516600160a060020a03199283161790925560018054928416929091169190911790556002546100829060036401000000006107ae6100e982021704565b60008054600160a060020a039081168252600360205260408083209390935560025482549091168252919020546100c6919064010000000061079761010582021704565b600154600160a060020a03166000908152600360205260409020555b505061011c565b60008082848115156100f757fe5b0490508091505b5092915050565b60008282111561011157fe5b508082035b92915050565b6107f68061012b6000396000f300606060405236156100ac5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100b1578063095ea7b31461013c57806318160ddd1461017257806323b872dd14610197578063313ce567146101d357806335a166c7146101fc57806370a082311461022b57806395d89b411461025c578063a9059cbb146102e7578063dd62ed3e1461031d578063ed1ed60914610354575b600080fd5b34156100bc57600080fd5b6100c4610383565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101015780820151818401525b6020016100e8565b50505050905090810190601f16801561012e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014757600080fd5b61015e600160a060020a03600435166024356103ba565b604051901515815260200160405180910390f35b341561017d57600080fd5b610185610427565b60405190815260200160405180910390f35b34156101a257600080fd5b61015e600160a060020a036004358116906024351660443561042e565b604051901515815260200160405180910390f35b34156101de57600080fd5b6101e66105c3565b60405160ff909116815260200160405180910390f35b341561020757600080fd5b61020f6105c8565b604051600160a060020a03909116815260200160405180910390f35b341561023657600080fd5b610185600160a060020a03600435166105d7565b60405190815260200160405180910390f35b341561026757600080fd5b6100c46105f6565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101015780820151818401525b6020016100e8565b50505050905090810190601f16801561012e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102f257600080fd5b61015e600160a060020a036004351660243561062d565b604051901515815260200160405180910390f35b341561032857600080fd5b610185600160a060020a0360043581169060243516610741565b60405190815260200160405180910390f35b341561035f57600080fd5b61020f61076e565b604051600160a060020a03909116815260200160405180910390f35b60408051908101604052600c81527f53746570616e20546f6b656e0000000000000000000000000000000000000000602082015281565b600160a060020a03338116600081815260046020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b6002545b90565b600160a060020a03831660009081526003602052604081205482901080159061047e5750600160a060020a0380851660009081526004602090815260408083203390941683529290522054829010155b801561048a5750600082115b80156104b65750600160a060020a0383166000908152600360205260408120546104b4908461077d565b115b15156104c157600080fd5b600160a060020a0384166000908152600360205260409020546104e49083610797565b600160a060020a03808616600090815260036020908152604080832094909455600481528382203390931682529190915220546105219083610797565b600160a060020a0380861660009081526004602090815260408083203385168452825280832094909455918616815260039091522054610561908361077d565b600160a060020a03808516600081815260036020526040908190209390935591908616907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b9392505050565b600881565b600054600160a060020a031681565b600160a060020a0381166000908152600360205260409020545b919050565b60408051908101604052600381527f5350540000000000000000000000000000000000000000000000000000000000602082015281565b600160a060020a0333166000908152600360205260408120548290108015906106565750600082115b80156106825750600160a060020a038316600090815260036020526040902054610680818461077d565b115b151561068d57600080fd5b600160a060020a0333166000908152600360205260409020546106b09083610797565b600160a060020a0333811660009081526003602052604080822093909355908516815220546106df908361077d565b600160a060020a0380851660008181526003602052604090819020939093559133909116907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060015b92915050565b600160a060020a038083166000908152600460209081526040808320938516835292905220545b92915050565b600154600160a060020a031681565b60008282018381101561078c57fe5b8091505b5092915050565b6000828211156107a357fe5b508082035b92915050565b60008082848115156107bc57fe5b0490508091505b50929150505600a165627a7a7230582038948bce6d94d058a7885b6bfab967d87d0a14b819d10efbe596902696f282000029';
var interface = [{
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [{
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [{
            "name": "success",
            "type": "bool"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "name": "totalSupply",
            "type": "uint256"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [{
            "name": "success",
            "type": "bool"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "name": "",
            "type": "uint8"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ownerFirst",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "_owner",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "name": "balance",
            "type": "uint256"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [{
            "name": "success",
            "type": "bool"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [{
            "name": "remaining",
            "type": "uint256"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "ownerSecond",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "type": "function"
    },
    {
        "inputs": [{
                "name": "_ownerFirst",
                "type": "address"
            },
            {
                "name": "_ownerSecond",
                "type": "address"
            }
        ],
        "payable": false,
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "name": "_owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    }
];


var web3;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/vRtx5LtC6D1enY0g6x0k"));
}


function sendRaw(rawTx) {
    var privateKey = new Buffer(key, 'hex');
    var transaction = new tx(rawTx);
    transaction.sign(privateKey);
    var serializedTx = transaction.serialize().toString('hex');
    web3.eth.sendRawTransaction(
    '0x' + serializedTx, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });
}


var rawTx = {
    nonce: web3.toHex(web3.eth.getTransactionCount(address)), //track outgoing transactions
    gasLimit: web3.toHex(8000000), //THIS IS GAS LIMIT 
    gasPrice: web3.toHex(20000000000), //THIS IS GAS PRICE
    data: ['0x' + bytecode + 'C0b4ec83028307053Fbe8d00ba4372384fe4b52B','0x' + bytecode + '4E90a36B45879F5baE71B57Ad525e817aFA54890']   //firstArgument
    // data2: '0x' + bytecode + '4E90a36B45879F5baE71B57Ad525e817aFA54890' //secondArgument
};

sendRaw(rawTx);
