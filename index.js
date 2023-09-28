const { fetchBreedDescription } = require('./breedFetcher');

if (process.argv.length !== 3) {
  console.log('Please enter one breed name in command line.');
  process.exit();
}

const search = process.argv[2];
fetchBreedDescription(search, (error, description) => {
  if (error) {
    console.log('Something went wrong sending request:');
    console.error(error);
    return;
  }

  console.log(description);
});