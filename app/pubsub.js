// const PubNub = require('pubnub');

// const credentials = {
//  publishKey: 'pub-c-bef8b219-5c58-4fa9-b535-4f38a057919e',
//  subscribeKey: 'sub-c-4048e32e-efd4-11ea-a728-4ec3aefbf636',
//  secretKey: 'sec-c-YjlhMzM3OGItNGE5NS00NWMxLWFhYjItOWJlMjcwNjAxYzVj'
// };

// const CHANNELS = {
//     TEST: 'TEST'
// };

// class PubSub {
//     constructor() {
//         this.pubnub = new PubNub(credentials);

//         this.pubnub.subscribe({ channels: Object.values(CHANNELS) });

//         this.pubnub.addListener(this.listener());
//     }

//     listener() {
//         return {
//             message: messageObject => {
//                 const { channel, message } = messageObject;

//                 console.log(`Message received. Channel: ${channel}. Message: ${message}`);
//             }
//         };
//     }

//     publish({ channel, message }) {
//         this.pubnub.publish({ channel, message });
//     }
// }


// module.exports = PubSub;

const redis = require('redis');

const CHANNELS = {
    TEST: 'TEST',
    BLOCKCHAIN: 'BLOCKCHAIN',
    TRANSACTION: 'TRANSACTION'
};

class PubSub {
    constructor({ blockchain, transactionPool, wallet }) {
        this.blockchain = blockchain;
        this.wallet = wallet;
        this.transactionPool = transactionPool;

        this.publisher = redis.createClient();
        this.subscriber = redis.createClient();

        this.subscribeToChannels();

        this.subscriber.on(
            'message', 
            (channel, message) => this.handleMessage(channel, message)
        );
    }

    handleMessage(channel, message) {
        console.log(`Message received. Channel: ${channel}. Message: ${message}.`);

        const parsedMessage = JSON.parse(message);

        switch(channel) {
            case CHANNELS.BLOCKCHAIN:
              this.blockchain.replaceChain(parsedMessage);
              break;
            case CHANNELS.TRANSACTION:
                if(!this.transactionPool.existingTransaction({inputAdress: this.wallet.publicKey})) {
                this.transactionPool.setTransaction(parsedMessage);
                }
                break;
            default:
              return;
        }
    }

    subscribeToChannels(){
        Object.values(CHANNELS).forEach(channel => {
            this.subscriber.subscribe(channel);
        });
    }

    publish({ channel, message }) {
        this.subscriber.unsubscribe(channel, () => {
            this.publisher.publish(channel, message, () => {
                this.subscriber.subscribe(channel);
            });
        });
    }

    broadcastChain(){
        this.publish({
            channel: CHANNELS.BLOCKCHAIN,
            message: JSON.stringify(this.blockchain.chain)
        });
    }

    broadcastTransaction(transaction) {
        this.publish({
            channel: CHANNELS.TRANSACTION,
            message: JSON.stringify(transaction)
        });
    }
}

module.exports = PubSub;