function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  destroyBoxes();
  const boxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.textContent = `${i + 1}`;
    size += 10;
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  const amount = parseInt(input.value.trim(), 10);
  if (isNaN(amount) || amount < 1 || amount > 100) {
    alert("Please enter a number between 1 and 100!");
    return;
  }
  createBoxes(amount);
  input.value = "";
});
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
