import './index.css';
import showScores from './modules/showScores.js';
// import scores from './scores.js';
// import { BaseUrl, GameID } from './config/api.js';

// const scoresUl = document.querySelector('.recent-score-ul');

// scores.forEach((score) => {
//   scoresUl.innerHTML += `
//     <li class="score-li">
//       <span class="user">${score.name} </span>
//       <span class="score">${score.score}</span>
//     </li>
//   `;
// });

// const refresh = async () => {
//   try {
//     const response = await fetch(`${BaseUrl}games/${GameID}/scores/`);
//     const data = await response.json();
//     console.log(data.result);
//   } catch (error) {
//     return error;
//   }
// };

// console.log(refresh());

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => showScores);
