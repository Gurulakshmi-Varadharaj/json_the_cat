'use-strict';

const cliArg = process.argv.slice(2);

const breedQuery = `${cliArg}`;

const request = require('request');

//HTTP Request to query the breed
const httprequest = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedQuery;

//To send request to API and get the description of breed
request(httprequest, (err, response, body) => {
  //Handling rquest Errors
  if (err) {
    throw new err;
  }
  //To handle if no such breed is found
  if (body === '[]') {
    console.log('Requested Breed not found');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }

});