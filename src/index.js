import './index.css';
import scores from './scores.js';

const scoresUl = document.querySelector('.recent-score-ul');

scores.forEach((score) => {
  scoresUl.innerHTML += `
    <li class="score-li">
      <span class="user">${score.name} </span>
      <span class="score">${score.score}</span>
    </li>
  `;
});
