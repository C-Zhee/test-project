const jokeElement = document.getElementById('joke');
const jokeForm = document.getElementById('jokeForm');
const jokeInput = document.getElementById('jokeInput');
const titleElement = document.getElementById('title');


const fetchChuckNorrisJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    jokeElement.textContent = data.value;
};
fetchChuckNorrisJoke();


const submitJoke = (e) => {
    event.preventDefault();
    const userJoke = jokeInput.value;
    jokeInput.value = '';
};


// hover over and off will change text color

titleElement.addEventListener('mouseover', () => {
    titleElement.style.color = 'pink';
});

titleElement.addEventListener('mouseout', () => {
    titleElement.style.color = 'black';
});

jokeElement.addEventListener('mouseover', () => {
    jokeElement.style.color = 'red';
});

jokeElement.addEventListener('mouseout', () => {
    jokeElement.style.color = 'black';
});



document.getElementById('getJokeButton').addEventListener('click', fetchChuckNorrisJoke);
jokeForm.addEventListener('submit', submitJoke);

