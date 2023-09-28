const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error || response.statusCode >= 400) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (data.length < 1) {
      return callback(new Error(`Couldnt find cat breed with name ${breedName}`), null);
    }
    return callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};