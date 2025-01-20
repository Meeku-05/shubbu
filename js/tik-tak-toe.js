const menuToggle = document.getElementById("menuToggle");
const pagesLinks = document.querySelector(".pages_links");
const socialIcons = document.querySelector(".social_icon");
menuToggle.addEventListener("click", () => {
	pagesLinks.classList.toggle("active");
	socialIcons.classList.toggle("active");
});

let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameButton = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turn_O = true;

// game pattern
const winPattern = [
	[0, 1, 2],
	[0, 3, 6],
	[0, 4, 8],
	[1, 4, 7],
	[2, 5, 8],
	[2, 4, 6],
	[3, 4, 5],
	[6, 7, 8],
];

const resetGame = () => {
	turn_O = true;
	enableBoxes();
	msg.classList.add("hide");
	newGameButton.classList.add("hide");
	msg.innerText = "";
};

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		if (box.innerText === "") {
			// Prevent overwriting clicks
			if (turn_O) {
				box.innerText = "O";
				box.style.color = "black";
				turn_O = false;
			} else {
				box.innerText = "X";
				box.style.color = "red";
				turn_O = true;
			}
			box.disabled = true;
			checkWinner();
		}
	});
});

const disableBoxes = () => {
	boxes.forEach((box) => (box.disabled = true));
};

const enableBoxes = () => {
	boxes.forEach((box) => {
		box.disabled = false;
		box.innerText = "";
		box.style.color = "black";
	});
};

const showWinner = (winner) => {
	msg.innerText = `Congratulations, winner is ${winner}`;
	msg.classList.remove("hide");
	newGameButton.classList.remove("hide");
	disableBoxes();
};

const checkWinner = () => {
	for (let pattern of winPattern) {
		let pos1_Value = boxes[pattern[0]].innerText;
		let pos2_Value = boxes[pattern[1]].innerText;
		let pos3_Value = boxes[pattern[2]].innerText;

		if (
			pos1_Value !== "" &&
			pos1_Value === pos2_Value &&
			pos2_Value === pos3_Value
		) {
			showWinner(pos1_Value);
			return;
		}
	}
};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
