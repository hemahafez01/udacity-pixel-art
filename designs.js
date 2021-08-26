// Select color input
let pixelCanvas = document.querySelector("#pixelCanvas");
// Select size input
let submitButton = document.querySelector("#submit");
let height = document.querySelector("#inputHeight");
let width = document.querySelector("#inputWidth");
const colorPicker = document.querySelector("#colorPicker");
let color;
function removeOldTable() {
  while (pixelCanvas.firstChild) {
    pixelCanvas.removeChild(pixelCanvas.firstChild);
  }
}
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  makeGrid(height, width);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
  removeOldTable();
  for (let row = 0; row < height.value; row++) {
    let rows = document.createElement("tr");
    pixelCanvas.appendChild(rows);
    for (let col = 0; col < width.value; col++) {
      let cell = document.createElement("td");
      rows.appendChild(cell);
      cell.addEventListener("click", function () {
        color = colorPicker.value;
      });
      cell.addEventListener("click", function () {
        cell.style.backgroundColor = color;
      });
    }
  }
}
