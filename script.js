const body = document.querySelector('body');
const container = document.querySelector('#container');
const navBar = document.createElement('div')
navBar.id = 'navBar';
document.body.insertBefore(navBar, document.getElementById('container'));

// Grid Button
const gridButton = document.createElement('button');
gridButton.id = 'gridButton';
gridButton.classList.add('button')
gridButton.textContent = "Number of Grid"
gridButton.addEventListener('click', generateBoxes);
navBar.appendChild(gridButton);

// Random

const randButton = document.createElement('button');
randButton.id = 'randButton';
randButton.classList.add('button')
randButton.textContent = "Randomizer"
randButton.addEventListener('click', toggleRandomizer);
navBar.appendChild(randButton);

// Gradient

const gradientButton = document.createElement('button');
gradientButton.id = 'gradientButton';
gradientButton.classList.add('button')
gradientButton.textContent = "Choose Gradient"
// gradientButton.addEventListener('click', generateBoxes);
navBar.appendChild(gradientButton);

// Erase

const eraseButton = document.createElement('button');
eraseButton.id = 'eraseButton';
eraseButton.classList.add('button')
eraseButton.textContent = "Eraser"
eraseButton.addEventListener('click', toggleEraser);
navBar.appendChild(eraseButton);



function generateBoxes() {
    let input;

    for (;;) { // Dormammu effect here (Infinite Loop)
        input = parseInt(prompt("Enter a number between 1 and 100:"));

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
    // box.style.border = '1px solid black';
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
    isErase = !isErase;
}

// Toggle Randomizer

let isRandom = true;

function toggleRandomizer() {
    isRandom = !isRandom;
}

// Hover Effects

function handleHover(event) {
    const box = event.target;

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
