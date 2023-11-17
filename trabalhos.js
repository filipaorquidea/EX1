const numDivs = 20;

for (let i = 0; i < numDivs; i++) {
  createDiv();
}

function createDiv() {
  const work = document.createElement('div');
  work.classList.add('work');
  work.appendChild(document.createTextNode('WORK'));

  const randomX = Math.random() * (window.innerWidth-600);
  const randomY = Math.random() * (window.innerHeight);

  work.style.left = `${randomX}px`;
  work.style.top = `${randomY}px`;

  document.body.appendChild(work);
}