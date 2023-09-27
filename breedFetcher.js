const request = require('request');

if (process.argv.length !== 3) {
  console.log('Please enter one breed name in command line.');
  process.exit();
}

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (error, response, body) => {
  if (error || response.statusCode >= 400) {
    console.log('Something went wrong sending request:');
    console.error(error);
    return;
  }

  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log(`Couldn't find cat breed with name ${process.argv[2]}`);
    return;
  }
  console.log(data[0].description);
});