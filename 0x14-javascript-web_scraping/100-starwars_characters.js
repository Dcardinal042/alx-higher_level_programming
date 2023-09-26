#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
  console.log('Please provide a valid Movie ID as the first argument.');
  process.exit(1);
}

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

function getCharacters(url) {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
      process.exit(1);
    }

    if (response.statusCode !== 200) {
      console.error('Invalid response:', response.statusCode);
      process.exit(1);
    }

    const film = JSON.parse(body);

    console.log(`Characters from "${film.title}":`);
    film.characters.forEach(characterUrl => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error('Error:', charError);
          process.exit(1);
        }

        if (charResponse.statusCode !== 200) {
          console.error('Invalid response:', charResponse.statusCode);
          process.exit(1);
        }

        const character = JSON.parse(charBody);
        console.log(character.name);
      });
    });
  });
}

getCharacters(apiUrl);
