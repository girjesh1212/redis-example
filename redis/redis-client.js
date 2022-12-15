const redis = require('redis');

// This creates a client with default host and port.
const client = redis.createClient();

client.on('error', (error) => console.error(`Error : ${error}`));
client.on('connect', () => { console.log('Redis client connected to redis'); });
client.on('ready', () => { console.log('Redis client ready to use...'); });
client.on('end', () => { console.log('Redis client disconnected from redis'); });

module.exports.client = client;
