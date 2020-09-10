const { STARTING_BALANCE } = require('../config');
const { ec } = require('../util');
 
class Wallet {
    constructor() {
        this.balance = STARTING_BALANCE;

        const keyPair = ec.genKeyPair();
    }
};

module.exports = Wallet;