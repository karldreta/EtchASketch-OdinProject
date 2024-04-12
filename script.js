const body = document.querySelector('body');
const container = document.querySelector('#container');
const navBar = document.createElement('div')
navBar.id = 'navBar';
document.body.insertBefore(navBar, document.getElementById('container'));

// Grid Button
const gridButton = document.createElement('button');
gridButton.id = 'gridButton';
gridButton.classList.add('button')
gridButton.innerHTML = '<i class="fa-solid fa-table-cells"></i>'
gridButton.addEventListener('click', generateBoxes);
navBar.appendChild(gridButton);

// Random

const randButton = document.createElement('button');
randButton.id = 'randButton';
randButton.classList.add('button')
randButton.innerHTML = '<i class="fa-solid fa-shuffle"></i>'
randButton.addEventListener('click', toggleRandomizer);
navBar.appendChild(randButton);

// Erase

const eraseButton = document.createElement('button');
eraseButton.id = 'eraseButton';
eraseButton.classList.add('button')
eraseButton.innerHTML = '<i class="fas fa-eraser"></i>';
eraseButton.addEventListener('click', toggleEraser);
navBar.appendChild(eraseButton);



function generateBoxes() {
    let input;

    for (;;) { // Dormammu effect here (Infinite Loop)
        input = parseInt(prompt("Enter number of Boxes from 1-100 (Input will be squared)"));

        if (!isNaN(input) && input >= 1 && input <= 100) {
            break;
        } else {
            alert("Please enter a number between 1 and 100.")
        }
    }
    // Create the necessary formula to calculate the size of the boxes
    const numBoxes = input**2;
    const boxesPerRow = Math.sqrt(numBoxes);
    const boxSize = 500 / boxesPerRow; // Also per column, where 500 is the container size

    container.innerHTML = ''; // Restarts the container with every input

    // Initialize the boxes via loop
    for (let i = 1; i <= numBoxes; i++) {

    const box = document.createElement('div');

    box.classList.add('box');
    box.id = 'box-' + i;
    box.style.width = boxSize + 'px';
    box.style.height = boxSize + 'px';
    box.style.opacity = '0.1';
    container.appendChild(box);
    }

    // Hovering
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseenter', handleHover));

}


// Handling Hover Events

// Toggle Eraser

let isErase = false;

function toggleEraser() {
    isErase = !isErase

    if (isErase) {
        eraseButton.classList.add('active');
    } else {
        eraseButton.classList.remove('active');
    }
}

// Toggle Randomizer

let isRandom = false;

function toggleRandomizer() {
    isRandom = !isRandom;

    if (isRandom) {
        randButton.classList.add('active');
    } else {
        randButton.classList.remove('active');
    }
}

// Hover Effects

function handleHover(event) {
    const box = event.target;
    let opacity = parseFloat(box.style.opacity);
    opacity += 0.1;

    box.style.opacity = opacity;

    if (isErase) {
        eraseContent(box);
    } else if (isRandom){
        randomContent(box);
    } else {
        colorContent(box);
    }
}

function eraseContent(box) {
    box.style.backgroundColor = '';
}

function randomContent(box) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${red}, ${green}, ${blue})`;
    box.style.backgroundColor = randomColor;  
}

function colorContent(box) {
    box.style.backgroundColor = 'black';
}
