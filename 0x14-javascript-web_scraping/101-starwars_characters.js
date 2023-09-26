#!/usr/bin/node
const request = require('request');

// Function to fetch characters from a specific movie
function getMovieCharacters(movieId) {
  const url = `https://swapi.dev/api/films/${movieId}/`;

  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else {
      const filmData = JSON.parse(body);
      const characters = filmData.characters;

      // Function to fetch and print character names
      function fetchCharacterName(index) {
        if (index >= characters.length) {
          return; // All characters have been printed
        }

        const characterUrl = characters[index];
        request(characterUrl, (error, response, body) => {
          if (error) {
            console.error('Error:', error);
          } else {
            const characterData = JSON.parse(body);
            console.log(characterData.name);
            fetchCharacterName(index + 1); // Print the next character
          }
        });
      }

      // Start fetching and printing character names
      fetchCharacterName(0);
    }
  });
}

// Check if the movie ID is provided as a command-line argument
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
} else {
  getMovieCharacters(movieId);
}
