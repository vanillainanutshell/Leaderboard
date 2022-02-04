const setScore = (scoreList) => {
  const containerUl = document.getElementById('scoreUl');
  let counter = 0;
  containerUl.innerHTML = '';
  scoreList.result.forEach((element) => {
    const li = document.createElement('li');
    counter += 1;
    li.innerHTML = `<li class="gamesLi"><div><p>USER: ${element.user}</p></div><div></div><p>SCORE: ${element.score}</p></li>`;
    li.classList.add('taskLi');
    if (counter % 2 !== 0) {
      li.classList.add('grey');
    }
    containerUl.appendChild(li);
  });
};

export default setScore;