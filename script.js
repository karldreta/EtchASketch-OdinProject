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
    


    container.appendChild(box);  
}