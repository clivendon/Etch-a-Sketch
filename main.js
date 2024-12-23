let changeSizeButton = document.getElementById("resize-button");
let container = document.getElementById("container");
let gridSize = 16;

function randomColor() {
	const r = Math.floor(Math.random() * 256); // 0 to 255
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const a = Math.random(); // 0 to 1

	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const generateGrid = (size) => {
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const square = document.createElement("div");
			square.classList.add("grid-square");
			square.style.width = 720 / size + "px";
			square.style.height = 720 / size + "px";
			square.addEventListener("mouseover", (event) => {
				event.target.style.backgroundColor = randomColor();
			});
			// Append each square to the container
			container.appendChild(square);
		}
	}
};

const changeGridSize = () => {
	container.innerHTML = "";

	let requestedSize;
	while (true) {
		requestedSize = prompt("Enter the desired grid size from 4-100");
		if (!isNaN(requestedSize) && requestedSize >= 4 && requestedSize <= 100) {
			break;
		}
	}

	gridSize = requestedSize;
	generateGrid(gridSize);
};

changeSizeButton.addEventListener("click", changeGridSize);

generateGrid(gridSize);
