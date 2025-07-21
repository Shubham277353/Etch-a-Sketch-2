const container = document.querySelector(".container");
const newGrid = document.querySelector("#btn");
const resetBtn = document.querySelector(".reset");

function createNewGrid(size) {
  container.innerHTML = "";
  const totalSquare = size * size;
  const squareSize = 960 / size;

  for (let j = 1; j <= totalSquare; j++) {
    const divs = document.createElement("div");
    divs.classList.add("squareDivs");

    divs.style.height = `${squareSize}`;
    divs.style.width = `${squareSize}`;

    divs.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    });

    container.appendChild(divs);
  }
}

createNewGrid(16);

newGrid.addEventListener("click", () => {
  const size = prompt("Enter grid size (1-100):");
  createNewGrid(size);
});
