const container = document.querySelector('#container');
const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = "Choose number of squares"
button.addEventListener('click', generateBoxes);
button.id = 'button';
body.appendChild(button);


function generateBoxes() {
    container.innerHTML = '';
    let boxQuantity = parseInt(prompt("Maximum number of 100: ")**2);

    boxQuantity = Math.min(boxQuantity, 10000);

    // Initialize the boxes via loop
    for (let i = 1; i <= boxQuantity; i++) {

        const box = document.createElement('div');
        const boxNum = document.createElement('p');
    
        box.classList.add('box');
        box.id = 'box-' + i;

    
        boxNum.textContent = i;
        boxNum.classList.add('boxNum');   
        box.appendChild(boxNum);
    
        container.appendChild(box);
    }

        // Hovering
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => box.addEventListener('mouseenter', changeColor));

    function changeColor(event) {
        const box = event.target;
        box.style.backgroundColor = 'black';
    }
}


