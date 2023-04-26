"use strict";
// DOCS: https://github.com/binance/binance-connector-node
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountInfo = void 0;
const { Spot } = require('@binance/connector');
const apiKey = 'kgvJ5pPE2i4Iv5vtt7Zg3x7KH7OKUcxq6CcbjjAU6Pi4zHDUmQ1oSZSamNch1qPA';
const apiSecret = 'US8COJktZXeFrznVNd3mQYUgT30wbHIgZrTaz7kLq4tiC81lqu12b5A6eZnAQnKP';
// const client = new Spot(apiKey, apiSecret)
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://testnet.binance.vision' });
const getAccountInfo = () => client.account();
exports.getAccountInfo = getAccountInfo;
const newOrder = () => client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
    price: '350',
    quantity: 1,
    timeInForce: 'GTC'
})
    .then((response) => client.logger.log(response.data))
    .catch((error) => client.logger.error(error));
