const section = document.querySelector("section");
const container = document.querySelector("#container");
const divContainer = document.querySelector('.divContainer');
const btnClear = document.querySelector('button');

for (let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    divs.addEventListener('mouseover', () => {
        divs.style.backgroundColor = 'orange';
    });
    divContainer.append(divs);
}

function getResult() {
    btnClear.addEventListener('click', () => {
        const result = prompt('What grid size would you like?');
        divContainer.remove('div');
        const secondContainer = document.createElement('container');
        const secondDivs = document.createElement('div');
        secondContainer.classList.add('secondContainer');
        container.append(secondContainer);
        secondContainer.append(secondDivs);
    });
} 
getResult();
