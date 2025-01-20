const menuToggle = document.getElementById("menuToggle");
const pagesLinks = document.querySelector(".pages_links");
const socialIcons = document.querySelector(".social_icon");
menuToggle.addEventListener("click", () => {
	pagesLinks.classList.toggle("active");
	socialIcons.classList.toggle("active");
});

let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choices");
let msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const genCompChoice = () => {
	const option = ["rock", "paper", "scissors"];
	// rock, paper, scissor
	const randomIndex = Math.floor(Math.random() * 3);
	return option[randomIndex];
};
const drawGame = () => {
	console.log("Draw Game.");
	msg.innerText = "Draw Game.";
	msg.style.backgroundColor = "black";
};
const showWinner = (userWin, userChoice, CompChoice) => {
	if (userWin) {
		userScore++;
		userScorePara.innerText = userScore;
		console.log("You Win.");
		msg.innerText = `You win ! Your ${userChoice} beats ${CompChoice} `;
		msg.style.backgroundColor = "green";
	} else {
		compScore++;
		compScorePara.innerText = compScore;
		console.log("Computer Win.");
		msg.innerText = `Computer win ! his ${CompChoice} beats your ${userChoice} `;
		msg.style.backgroundColor = "red";
	}
};
const playGame = (userChoice) => {
	console.log("User choice : ", userChoice);
	const CompChoice = genCompChoice();
	console.log("Computer choice : ", CompChoice);
	if (userChoice === CompChoice) {
		//draw
		drawGame();
	} else {
		let userWin = true;
		if (userChoice === "rock") {
			userWin = CompChoice === "paper" ? false : true;
		} else if (userChoice === "paper") {
			userWin = CompChoice === "scissors" ? false : true;
		} else {
			userWin = CompChoice === "rock" ? false : true;
		}
		showWinner(userWin, userChoice, CompChoice);
	}
};
choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute("id");
		playGame(userChoice);
	});
});
