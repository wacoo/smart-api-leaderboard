import './style.css';

const ul = document.getElementById('ul');
const form = document.getElementById('frm-add');

const scores = [
  { name: 'John', score: 80 },
  { name: 'Mathew', score: 100 },
  { name: 'Wonde', score: 120 },
  { name: 'Solomon', score: 50 },
  { name: 'Rose', score: 75 },
  { name: 'Lily', score: 90 },
  { name: 'Wac', score: 130 },
];
const populareScoreBoard = () => {
  if (scores !== []) {
    ul.innerHTML = '';
    scores.forEach((score) => {
      const li = document.createElement('li');
      li.innerHTML = `${score.name}: ${score.score}`;
      ul.appendChild(li);
    });
  }
};

const addSubmitListener = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.elements.name.value;
    const score = form.elements.score.value;
    scores.push({ name, score });
    populareScoreBoard();
  });
};

addSubmitListener();
populareScoreBoard();
