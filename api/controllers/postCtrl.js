const express = require('express');
const axios = require('axios');
const { client } = require('../../redis/redis-client.js');

module.exports.test = (req, res) => {
    return res.status(200).json({ msg: 'Test route works' });
}

// First look into redis cache, if the requested data is present, 
// return it from redis otherwise fetch the data and store it in redis for the next time.
module.exports.fetch = async (req, res) => {

    // Check if the requested data exists in redis.
    try {
        const data = await client.get('data');
        if (data) {
            console.log('Cache hit');
            return res.status(200).json(JSON.parse(data));
        }
    } catch (err) {
        return res.json(500).json({ msg: 'Oops! Something broke on server side' });
    }

    // If not exist, cache miss condition
    console.log('Cache miss');

    // Fetch the data by calling the url 
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(async function (response) {

            // Send the response as json
            res.json(response.data);

            // Save the response in redis for next request
            try {
                await client.set('data', JSON.stringify(response.data), { EX: 10 });    // SET key for 10 seconds
            } catch (err) {
                return res.json(500).json({ msg: 'Oops! Something broke on server side' });
            }
        })
        .catch(function (error) {
            return res.status(500).json(error);
        });
}
