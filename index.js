'use-strict';

const breedQuery = process.argv[2];

const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedQuery, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});