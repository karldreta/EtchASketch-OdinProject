const container = document.querySelector('#container');
const body = document.querySelector('body');
const button = document.createElement('button');
button.textContent = "Canvas Size"
button.addEventListener('click', generateBoxes);
button.id = 'button';
body.appendChild(button);



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
    boxes.forEach(box => box.addEventListener('mouseenter', changeColor));

    function changeColor(event) {
        const box = event.target;
        box.style.backgroundColor = 'black';
    }
    
}


