class TransactionMiner {
    constructor({ blockchain, transactionPool, wallet, pusub }) {
        this.blockchain = blockchain;
        this.transactionPool = transactionPool;
        this.wallet = wallet;
        this.pusub = pusub;
    }

    mineTransactions() {
        // get the transactions pool's valid transactions

        // generate the miner's reward

        // add a block consisting of these transactions to the blockchain

        //broadcast the updated blockcain

        // clear the pool
    }
}

module.exports = TransactionMiner;