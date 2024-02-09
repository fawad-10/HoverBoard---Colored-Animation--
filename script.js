const container = document.getElementById("container");
const colors = [
  "#e81416",
  "#ffa500",
  "#faeb36",
  "#79c314",
  "#487de7",
  "#4b369d",
  "#70369d",
];

const square_num = 600;

for (let i = 0; i < square_num; i++) {
  const sqaure = document.createElement("div");
  sqaure.classList.add("sqaure");

  sqaure.addEventListener("mouseover", () => {
    setColorToElement(sqaure);
  });

  sqaure.addEventListener("mouseleave", () => {
    removeColorToElement(sqaure);
  });

  container.appendChild(sqaure);
}

function setColorToElement(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color} , 0 0 10px ${color}`;
}

function removeColorToElement(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #111";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
