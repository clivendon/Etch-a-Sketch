document.getElementsByClassName("grid-square");

function randomColor() {
	const r = Math.floor(Math.random() * 256); // 0 to 255
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const a = Math.random(); // 0 to 1

	return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const generateGrid = (gridSize) => {
	for (let i = 0; i < gridSize; i++) {
		for (let j = 0; j < gridSize; j++) {
			const square = document.createElement("div");
			square.classList.add("grid-square");
			// Add the event listener to each square
			square.addEventListener("mouseover", (event) => {
				event.target.style.backgroundColor = randomColor();
			});
			// Append each square to the container
			document.querySelector(".container").appendChild(square);
		}
	}
};

generateGrid(16);
