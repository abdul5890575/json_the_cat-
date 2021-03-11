const request = require('request');

let args = process.argv;
const ENDPOINT = 'https://api.thecatapi.com/v1/breeds/search';
const params = `?q=${args[2]}`;

if (args[2] === undefined) {
  console.log('Please provide a breed');
    
} else {
  request(ENDPOINT + params, (error, response, body) => {
    if(error) {
      console.log('error:', error);
      console.log('statusCode:', response && response.statusCode);
    } else {
        //console.log('body:', body);
      const data = JSON.parse(body);
      try {
        console.log(data[0]['description']); //first entry of weight object
      } catch (err) {
        console.log('Breed does not exist in database');
      }
    }
  });
}


