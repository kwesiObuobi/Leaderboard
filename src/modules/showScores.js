import { BaseUrl, GameID } from '../config/api.js';

const scoresUl = document.querySelector('.recent-score-ul');

export default async () => {
  try {
    const response = await fetch(`${BaseUrl}games/${GameID}/scores/`);
    const data = await response.json();
    scoresUl.innerHTML = '';
    data.result.forEach((record) => {
      scoresUl.innerHTML += `
        <li class="score-li">
          <span class="user">${record.user} </span>
          <span class="score">${record.score}</span>
        </li>
      `;
    });
  } catch (error) {
    console.log(error);
  }
};