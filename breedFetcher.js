const request = require('request');

const fetchBreedDescription = function(breedQuery, callback) {
  //HTTP Request to query the breed
  const httprequest = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedQuery;

  //To send request to API and get the description of breed
  request(httprequest, (err, response, body) => {
    //Handling rquest Errors
    if (err) {
      callback(err, null);
    }
    //To handle if no such breed is found
    if (body === '[]') {
      callback('Requested Breed not found', null);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }

  });
};

module.exports = { fetchBreedDescription };