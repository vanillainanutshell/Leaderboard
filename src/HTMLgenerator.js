const HTMLgenerator = () => {
    const containerUl = document.getElementById('scoreUl');
    let counter = 0;
    containerUl.innerHTML = '';
    for (let i = 0; i < 3; i += 1) {
        const li = document.createElement('li');
        counter += 1;
        li.innerHTML = `<li class="gameLi"><p>game ${counter}</p></li>`;
        li.classList.add('taskLi');
        if (counter % 2 !== 0) {
            li.classList.add('grey');
        }
        containerUl.appendChild(li);
    }
};

export default HTMLgenerator;