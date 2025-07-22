const container = document.querySelector(".container");
const newGrid = document.querySelector("#btn");
const resetBtn = document.querySelector(".reset");
const colorPicker = document.querySelector("#colorPicker");
const colorBtn = document.querySelector("#colorBtn");

function createNewGrid(size) {
  container.innerHTML = "";
  const totalSquare = size * size;
  const squareSize = 960 / size;

  let selectedColor = "#000000";

  colorBtn.addEventListener("click", () => {
    colorPicker.click();
  });
  colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
    console.log(selectedColor);
    colorBtn.style.backgroundColor = selectedColor;
  });

  for (let j = 1; j <= totalSquare; j++) {
    const divs = document.createElement("div");
    divs.classList.add("squareDivs");

    divs.style.height = `${squareSize}px`;
    divs.style.width = `${squareSize}px`;

    divs.addEventListener("mouseenter", () => {
      divs.style.backgroundColor = `${selectedColor}`;
    });

    container.appendChild(divs);
  }
}

resetBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".squareDivs");
  squares.forEach(square => {
    square.style.backgroundColor = "white";
  });
});

createNewGrid(16);

newGrid.addEventListener("click", () => {
  const size = prompt("Enter grid size (1-100):");
  createNewGrid(size);
});
