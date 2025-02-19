const movieInput = document.getElementById('movieInput');
const addMovieBtn = document.getElementById('addMovie');
const movieList = document.getElementById('movieList');
const movieCount = document.getElementById('movieCount');
const clearListBtn = document.getElementById('clearList');

let movies = [];

function updateMovieList() {
    movieList.innerHTML = '';
    movies.forEach((movie, index) => {
        const div = document.createElement('div');
        div.classList.add('movie-card');
        div.innerHTML = `
            <span>${movie}</span><br>
            <button onclick="removeMovie(${index})" style="margin-top:5px; padding:5px; border:none; background:#d32f2f; color:white; border-radius:5px; cursor:pointer;">
                Remove
            </button>`;
        movieList.appendChild(div);
    });
    movieCount.textContent = `Total Movies: ${movies.length}`;
}

function addMovie() {
    const movieName = movieInput.value.trim();
    if (movieName === '') return;
    movies.push(movieName);
    movieInput.value = '';
    updateMovieList();
}

function removeMovie(index) {
    movies.splice(index, 1);
    updateMovieList();
}

function clearMovies() {
    movies = [];
    updateMovieList();
}

addMovieBtn.addEventListener('click', addMovie);
clearListBtn.addEventListener('click', clearMovies);
