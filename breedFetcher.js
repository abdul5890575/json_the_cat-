const request = require('request');

const ENDPOINT = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = (breedName, callback) => {
    if (breedName === undefined) {
      callback('No breed defined', null);
  } else {
      request(ENDPOINT + '?q=' + breedName, (error, response, body) => {
      if(error) {
        callback(error,null);
      } else {
        const data = JSON.parse(body);
        try {
          callback(null,data[0]['description']);
        } catch (err) {
          callback('Breed does not exist in database',null);
        }
      }
    });
  }
};

module.exports = fetchBreedDescription;