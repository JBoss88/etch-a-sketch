const sizeOfGrid = 16;
const container = document.querySelector('.container');

const createGrid = (amtOfGrids) => {
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < amtOfGrids; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox);
            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = 'orange';
            });
        }
        container.appendChild(row);
    }
}  
createGrid(sizeOfGrid);




function asksUser() {
    const aNumber = Number(window.prompt('What grid size would you like?', ''));
    console.log(aNumber)
}