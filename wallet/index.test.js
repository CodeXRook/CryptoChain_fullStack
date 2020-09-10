const Wallet = require('./index');
const { verifySignature } = require('../util');

describe('Wallet', () => {
    let wallet;

    beforeEach(() => {
        wallet = new Wallet();
    });

    it('has a `balance`', () => {
        expect(wallet).toHaveProperty('balance');
    });

    it('has a `publicKey`', () => {
       

        expect(wallet).toHaveProperty('publicKey');
    });

    describe('signing data', () => {
        const data = 'foobar';

        it('varifires a signature', () => {
            verifySignature({
                publicKey: wallet.publicKey,
                data, 
                signature:
            })
        });

        it('does not verify a invalid signature', () => {

        });

    });
});