const numDivs = 50;

for (let i = 0; i < numDivs; i++) {
  createDiv();
}

function createDiv() {
  const name = document.createElement('div');
  name.classList.add('name');
  name.appendChild(document.createTextNode('ABOUT ME'));

  const randomX = Math.random() * (window.innerWidth-200);
  const randomY = Math.random() * (window.innerHeight+400);

  name.style.left = `${randomX}px`;
  name.style.top = `${randomY}px`;

  document.body.appendChild(name);
}