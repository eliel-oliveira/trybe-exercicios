// apiScript.js
const text = document.getElementById('jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';
const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => text.innerText = joke);
};


window.onload = () => fetchJoke();