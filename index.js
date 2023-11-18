const numDivs = 40;

  for (let i = 0; i < numDivs; i++) {
    createDraggableDiv();
  }

  function createDraggableDiv() {
    const draggable = document.createElement('div');
    draggable.classList.add('draggable');
    draggable.appendChild(document.createTextNode('FILIPA ORQUÍDEA'));
    
    const randomX = Math.random() * (window.innerWidth-400);
    const randomY = Math.random() * (window.innerHeight+400);

    draggable.style.left = `${randomX}px`;
    draggable.style.top = `${randomY}px`;

    let isDragging = false;
    let offsetX, offsetY;

    draggable.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - draggable.getBoundingClientRect().left;
      offsetY = e.clientY - draggable.getBoundingClientRect().top;
      draggable.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        draggable.style.left = `${x}px`;
        draggable.style.top = `${y}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      draggable.style.cursor = 'grab';
    });

    document.body.appendChild(draggable);
  }

 /* function stroke (){

    const stroke = document.getElementsByName ('draggable');

    /*if( draggable.stroke){
      
    }
  }*/