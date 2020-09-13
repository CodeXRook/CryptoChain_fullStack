const Transaction = require('./transaction.');


class TransactionPool {
    constructor() {
        this.transactionMap = {};
    }

    clear() {
        
    }

    setTransaction(transaction) {
        this.transactionMap[transaction.id] = transaction;
    }

    setMap(transactionMap) {
        this.transactionMap = transactionMap;
    }

    existingTransaction({ inputAdress }) {
        const transaction =Object.values(this.transactionMap);

        return transaction.find(transaction => transaction.input.address === inputAdress);
    }
    validTransactions() {
       return Object.values(this.transactionMap).filter(
         transaction => Transaction.validTransaction(transaction) 
        );
    }
}

module.exports = TransactionPool;