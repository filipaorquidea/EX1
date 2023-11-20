const numDivs = 50;

for (let i = 0; i < numDivs; i++) {
  createDiv();
}

function createDiv() {
  const work = document.createElement('div');
  work.classList.add('work');
  work.appendChild(document.createTextNode('WORK'));

  const randomX = Math.random() * (window.innerWidth-150);
  const randomY = Math.random() * (window.innerHeight+350);

  work.style.left = `${randomX}px`;
  work.style.top = `${randomY}px`;

  document.body.appendChild(work);
}