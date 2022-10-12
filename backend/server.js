const express = require('express')
const bodyParser = require('body-parser')
var request = require('request');
const app = express();
const axios = require('axios');


app.use('/coins/markets/:id', async (req, res) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=14&page=${req.params.id}&sparkline=false`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.log(error);
        });
})

app.use('/coins/:id', async (req, res) => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${req.params.id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`)
        .then(response => {
            res.json(response.data)
        })
        .catch(error => {
            console.log(error);
        });
})


app.listen(5000, console.log('Server running on port 5000'))