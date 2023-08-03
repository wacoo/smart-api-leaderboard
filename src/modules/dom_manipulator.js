import loader from './api_loader.js';
import crown from '../images/crown.png';

const ul = document.getElementById('ul');
const form = document.getElementById('frm-add');
const btnRefresh = document.getElementById('btn-refresh');
const info = document.querySelector('.info');

class DOMManipulator {
  populateScoreBoard = async () => {
    let scores = await loader.getData();
    if (scores.result !== []) {
      ul.innerHTML = '';
      scores = scores.result.sort((a, b) => b.score - a.score);
      scores.forEach((score, idx) => {
        let crImg = null;
        const li = document.createElement('li');
        const table = document.createElement('table');
        const row = table.insertRow();
        const col1 = row.insertCell();
        const col2 = row.insertCell();
        const col3 = row.insertCell();
        col1.innerHTML = score.user;
        col2.innerHTML = score.score;
        col1.style.width = '200px';
        col2.style.width = '120px';
        col3.style.width = '50px';
        li.appendChild(table);
        if (idx === 0) {
          crImg = document.createElement('img');
          crImg.classList.add('crown');
          col3.appendChild(crImg);
          crImg.src = crown;
          li.style.color = 'green';
          li.style.fontSize = '15px';
          li.style.fontWeight = '800';
        }
        ul.appendChild(li);
      });
    }
  }

  addSubmitListener = () => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.elements.name.value;
      const score = form.elements.score.value;
      if (name && score) {
        const result = loader.setData({ user: name, score });
        let id = null;
        let msg = null;
        result.then((res) => {
          id = res.id;
          msg = res.message;
          this.showNotification(msg, id);
        });
        this.showNotification(msg, id);
      } else {
        this.showNotification('Name or Score field is empty!', 0);
      }
    });
  };

  addRefreshListener = () => {
    btnRefresh.addEventListener('click', (event) => {
      event.preventDefault();
      this.populateScoreBoard();
    });
  };

  showNotification = async (msg, id) => {
    info.innerHTML = msg;
    if (id) {
      info.classList.add('success');
      info.classList.remove('error');
    } else {
      info.classList.remove('success');
      info.classList.add('error');
    }

    setTimeout(() => {
      info.innerHTML = '';
    }, 5000);
  }
}

export default DOMManipulator;
