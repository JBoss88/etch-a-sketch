const section = document.querySelector("section")
const container = document.querySelector("#container");


for (let i = 0; i < 256; i++) {
    const divs = document.createElement("div");
    divs.addEventListener('mouseover', () => {
        divs.style.backgroundColor = 'orange';
    });
    container.append(divs);
}