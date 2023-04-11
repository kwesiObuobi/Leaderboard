import './index.css';
import addScore from './modules/addScore.js';
import showScores from './modules/showScores.js';

showScores();

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => showScores());

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#input-score').value;
  addScore(name, score);
  form.reset();
});