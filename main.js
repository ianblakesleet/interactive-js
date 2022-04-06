let message = document.querySelector('#message');

const addMovie = (event) => {
  event.preventDefault();

  let inputField = document.querySelector('input');

  let movie = document.createElement('li');
  let movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value;

  movieTitle.addEventListener('click', crossOffMovie);

  movie.appendChild(movieTitle);
  document.querySelector('ul').appendChild(movie);

  let deleteBtn = document.createElement('button');
  movie.appendChild(deleteBtn);
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', deleteMovie);

  inputField.value = '';
};
document.querySelector('form').addEventListener('submit', addMovie);

const deleteMovie = (event) => {
  event.target.parentNode.remove();
  message.textContent = 'Movie Deleted!';
};

const crossOffMovie = (event) => {
  event.target.classList.toggle('checked');
  if (event.target.classList.contains('checked')) {
    message.textContent = 'Movie Watched!';
  } else {
    message.textContent = 'Movie added back!';
  }
};

deleteMovie();
addMovie();
