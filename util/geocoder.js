const nodeGeoCoder = require('node-geocoder')

console.log(process.env.PORT)
const options = {
    provider: process.env.GEOCODER_PROVIDER,
    httpAdapter:'https',
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null 
  };
console.log(options)
const geocoder = nodeGeoCoder(options)
module.exports = geocoder