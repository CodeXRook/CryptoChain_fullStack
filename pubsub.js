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
    BLOCKCHAIN: 'BLOCKCHAIN'
};

class PubSub{
    constructor(){
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
    }
}

module.exports = PubSub;