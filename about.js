const numDivs = 14;

for (let i = 0; i < numDivs; i++) {
  createDiv();
}

function createDiv() {
  const name = document.createElement('div');
  name.classList.add('name');
  name.appendChild(document.createTextNode('FILIPA ORQUÍDEA'));

  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 50);

  name.style.left = `${randomX}px`;
  name.style.top = `${randomY}px`;

  document.body.appendChild(name);
}