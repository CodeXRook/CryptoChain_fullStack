const EC = require('elliptic').ec;

const ec = new EC('secp256k1');

const verifySignature = ({ publicKey, data, signature }) => {};
module.exports = { ec };