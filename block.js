class Block {
    constructor(timestamp, lastHash, hash, data) {
        this.timestamp = timestamp;
        this.lastHash =  lastHash;
        this.hash = hash;
        this.data =data;

    }
}

const block1 = new Block('o1/01/01', 'foo-lastHash', 'foo-hash', 'foo-data');