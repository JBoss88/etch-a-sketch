const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const createRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return {r, g, b}
}

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < amtOfGrids; j++) {
            const {r, g, b} = createRandomRGB();
           
            const widthAndHeight = 960 / amtOfGrids;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            gridBox.addEventListener('mouseover', () => {
               const bgColor = "rgb(" + r + "," + g + "," + b + ")";
               gridBox.style.background = bgColor;

            });
            row.appendChild(gridBox);
        }

        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('What grid size would you like?'));

    while (userSize > 100) {
        userSize = Number(prompt("Pick a smaller number and make sure it's 100 or less."));
    }

    const wrapper = document.querySelector('.wrapper');

    if (!wrapper) {
        createGrid(userSize);
    } else {
        wrapper.remove();
        createGrid(userSize);
    }
});
