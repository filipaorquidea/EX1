const numDivs = 50;

for (let i = 0; i < numDivs; i++) {
  createDiv();
}

function createDiv() {
  const work = document.createElement('div');
  work.classList.add('work');
  work.appendChild(document.createTextNode('WORK'));

  const randomX = Math.random() * (window.innerWidth - 150);
  const randomY = Math.random() * (window.innerHeight + 350);

  work.style.left = `${randomX}px`;
  work.style.top = `${randomY}px`;


  let isDragging = false;
  let offsetX, offsetY;

  work.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - work.getBoundingClientRect().left;
    offsetY = e.clientY - work.getBoundingClientRect().top;
    work.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      work.style.left = `${x}px`;
      work.style.top = `${y}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    work.style.cursor = 'grab';
  });

  document.body.appendChild(work);

}


