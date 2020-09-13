class TransactionPool {
    constructor() {
        this.transactionMap = {};
    }

    setTransaction(transaction) {
        this.transactionMap[transaction.id] = transaction;
    }
    existingTransaction({ inputAdress }) {
        const transaction =Object.values(this.transactionMap);

        return transaction.find(transaction => transaction.input.address === inputAdress);
    }
}

module.exports = TransactionPool;