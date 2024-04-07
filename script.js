const container = document.querySelector('#container');

// Initialize the boxes via loop
for (let i = 1; i <= 256; i++) {

    const box = document.createElement('div');
    const boxNum = document.createElement('p');

    box.classList.add('box');
    box.id = 'box-' + i;

    // boxNum.textContent = i;
    // boxNum.classList.add('boxNum');   
    // box.appendChild(boxNum);
    
    // Hovering

    container.appendChild(box);
}

// Hovering
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseenter', changeColor));

function changeColor(event) {
    const box = event.target;
    box.style.backgroundColor = 'black';
}

