const redis = require('redis');

class PubSub{
    constructor(){
        this.publisher = redis.createClient();
        this.subscriber = redis.createCleaint();
    }
}