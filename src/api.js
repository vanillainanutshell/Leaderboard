import setScore from './HTMLgenerator.js';

const form = document.getElementById('submitBtn');
const refreshBtn = document.getElementById('refreshBtn');

const addPlayer = async (e) => {
  e.preventDefault();
  const infoInput = document.querySelectorAll('input');
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yP3JQos7EWB0TjhGmzyM/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: infoInput[0].value,
      score: Number(infoInput[1].value),
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  infoInput[0].value = '';
  infoInput[1].value = '';
  return response.json();
};

const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yP3JQos7EWB0TjhGmzyM/scores/');
  return response.json();
};

getScore().then((response) => { setScore(response); });

form.addEventListener('click', addPlayer);
refreshBtn.addEventListener('click', () => { window.location.reload(); });

export default getScore;