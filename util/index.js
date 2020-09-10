const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

const verifySignature = ({ publicKey, data, signature }) => {
    const keyFromPublic = ec.keyFromPublic(publicKey, 'hex');
};

module.exports = { ec, verifySignature };