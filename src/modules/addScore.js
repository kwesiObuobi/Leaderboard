import { BaseUrl, GameID } from '../config/api.js';

export default async (user, score) => {
  const response = await fetch(`${BaseUrl}games/${GameID}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score: Number(score),
    }),
  });

  const result = await response.json();

  return result;
};